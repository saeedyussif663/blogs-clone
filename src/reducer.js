import moment from "moment/moment";

     const  addBlog =  async (blog) => {
        await  fetch('https://blogs-clone-5eedb-default-rtdb.firebaseio.com/blogs.json', {
            method: "POST",
            body: JSON.stringify(blog),
            headers: {
                'Content-Type': 'application/json'
            }
      });
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
