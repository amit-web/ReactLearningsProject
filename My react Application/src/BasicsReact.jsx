import React from 'react'

export const BasicsReact = () => {
    const reactElement = {
        type:'a',
        props:{
            href:"https://google.com",
            target:'_blank'
        },
        children:"click me to visit the google "
      }
      //can I pass the above object as we are passing function in the react.
      //yes we can pass but react wont accept these syntax so as per react syntax we need to pass it directly
      //babel will trnspile this code make readble and it will work.

      const anotherElement=(<a href="https://google.com" target='_blank'>
        visit google
      </a>)

      const reactElements = React.createElement(
          'a',
          {href:"https://google.com",
            target:'_blank'},
            'click me to visit google'
      )
      //see Above reactElements is reacl sytax which react is using in his library so it is also working.

        //see here we are directly passing the object and getting error.
        // reactElement
        //anotherElement
        //here we are passing as another element it is working why beacuse babel is converting this code to react redable.
        // and also here we are passing directly html element.

       // reactElements
  return (
    <div>BasicsReact</div>
  )
}
