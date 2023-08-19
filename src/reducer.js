import moment from "moment/moment";

const addBlog = async (blog) => {
        try {
         const response =  await  fetch('https://blogs-clone-5eedb-default-rtdb.firebaseio.com/blogs.json', {
            method: "POST",
            body: JSON.stringify(blog),
            headers: {
                'Content-Type': 'application/json'
            }
         });
            const data = response.json()
        } catch (error) {
            console.log(error);
        }

    }

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
        if (title.trim() === '' || content.trim() === '' || author.trim() === '') {
              return state
        } else {
            window.location.href = '/';
            console.log(action.id , newBlog);
            // updateBlog(action.id, newBlog);
             
        }
          action.title = '';
          action.author = '';
          action.category = 'Tech';
          action.content = '';
        return state
    }
      
      if (action.type === "SUBMIT") {
          let title = action.titleRef.current.value;
          let author = action.authorRef.current.value;
          let category = action.categoryRef.current.value;
          let content = action.contentRef.current.value;
          let date = moment().format().slice(0, 10);
          let newBlog = {
                  title,
                  author,
                  category,
                  content,
                  dateCreated: date
          }
        
          if (title.trim() === '' || content.trim() === '' || author.trim() === '') {
              return state
          } else {
              addBlog(newBlog);
              window.location.href = '/';
          }
          
          action.titleRef.current.value = '';
          action.authorRef.current.value = '';
          action.categoryRef.current.value = 'Tech';
          action.contentRef.current.value = '';
        
          return {
              ...state,
              blogDetails: newBlog,
          }
    }
    return state
}
