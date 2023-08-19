


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
         const updateBlog = async (id, blog) => {
         const response = await fetch(`https://blogs-clone-5eedb-default-rtdb.firebaseio.com/blogs/${id}.json`, {
            method: "PUT",
            headers: {
                 'Content-Type': 'application/json',
            },
            body: JSON.stringify(blog)
         })
             if (response.ok) {
            window.location.href = '/'
        }
        }
        updateBlog(action.id, action.blog);
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
