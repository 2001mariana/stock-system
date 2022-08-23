import React from 'react'

class ClassComponent extends React.Component<{ example: string }> {
  state = {
    example: 'component with state, statefull'
  }

  render() {
    return (
      <div className="ClassComponent">
        <p>Existiam componentes statefull e stateless.</p> 
        <p>StateFull eram aqueles que tinham estado e stateless eram aqueles que não tinham estado.</p> 

        <div className="ClassComponentstateless">
          Hi! I'm commom class component, stateless. 
        </div>

        <div className="ClassComponentstatefull">
          Hi! I'm { this.state.example }
        </div>

        <div className="ClassComponentprops">
          Hi! I'm props class component, {this.props.example}. 
        </div>
      </div> 
    )
  }      
}

export default ClassComponent