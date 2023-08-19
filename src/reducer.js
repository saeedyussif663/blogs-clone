import moment from "moment/moment";


const updateBlog = async (id, blog) => {
    try {
        const response = await fetch(`https://blogs-clone-5eedb-default-rtdb.firebaseio.com/blogs/${id}.json`, {
            method: "PUT",
            headers: {
                 'Content-Type': 'application/json',
            },
            body: JSON.stringify(blog)
        })
    } catch (error) {
        console.log(error);
    }
}



export const reducer = (state, action) => {
    if (action.type === 'ISLOADING') {
        return {
            ...state,
            isLoading: false
        }
    }

    if (action.type === 'CLEARBLOGARRAY') {
        return {
            ...state,
            blogs: []
        }
    }


    if (action.type === 'PUSHBLOG') {
        const blog = state.blogs.push({
            id: action.key,
            ...action.element
        });
        return {
            ...state,
            blog
        }
    }

    if (action.type === "TOGGLEMENU") {
        return {
            ...state, 
            isShowing: !state.isShowing
        }
        }
    
    if (action.type === "CLOSE") {
        return {
            ...state,
            isShowing: !state.isShowing
        }
      }

    if (action.type === 'TOGGLEMODAL') {
        return {
            ...state,
            isModalShowing: !state.isModalShowing
          }
    }
    
    if (action.type === 'UPDATE') {
        let title = action.title;
        let author = action.author;
        let category = action.category;
        let content = action.content;
        let date = moment().format().slice(0, 10)
        let newBlog = {
            title, 
            author,
            category,
            content,
            date,

        }
            // updateBlog(action.id, newBlog);
            window.location.href = '/';
            // console.log(action.id , newBlog);

          action.title = '';
          action.author = '';
          action.category = 'Tech';
          action.content = '';
        return state
    }
      
    if (action.type === "SUBMIT") {
        const submitBlog = async () => {
            const response = await fetch('https://blogs-clone-5eedb-default-rtdb.firebaseio.com/blogs.json', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(action.blog)
            })
            if (response.ok) {
                window.location.href = '/';
            }
            
        }
        submitBlog();
        
          return {
              ...state
          }
    }
    return state
}
