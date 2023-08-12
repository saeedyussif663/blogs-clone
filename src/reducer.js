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
          addBlog(newBlog);
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
