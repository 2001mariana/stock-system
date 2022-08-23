import React from 'react'

class ClassComponent extends React.Component {
  state = {
    example: 'component with state, statefull'
  }

  render() {
    return (
      <div className="ClassComponent">
        <p>Existiam componentes statefull e stateless.</p> 
        StateFull eram aqueles que tinham estado e stateless eram aqueles que não tinham estado.

        <div className="ClassComponent--stateless">
          Hi! I'm commom class component, stateless. 
        </div>

        <div className="ClassComponent--statefull">
          Hi! I'm { this.state.example }
        </div>
      </div> 
    )
  }      
}

export default ClassComponent