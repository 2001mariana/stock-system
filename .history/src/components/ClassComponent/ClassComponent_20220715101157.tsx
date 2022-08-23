import React from 'react'

class ClassComponent extends React.Component<{ example: string }> {
  state = {
    example: 'component with state, statefull',
    name: 'name'
  }

  render() {
    return (
      <div className="ClassComponent">
        <p>Existiam componentes statefull e stateless.</p> 
        <p>StateFull eram aqueles que tinham estado e stateless eram aqueles que não tinham estado.</p> 

        <div className="ClassComponent__stateless">
          Hi! I'm commom class component, stateless. 
        </div>

        <div className="ClassComponent__statefull">
          Hi! I'm { this.state.example }
        </div>

        <div className="ClassComponent__statefull--alter">
          stateValue: { this.state.name }

          <button onClick={() => }>Alter State</button>
        </div>

        <div className="ClassComponent__props">
          Hi! I'm props class component, {this.props.example}. 
        </div>
      </div> 
    )
  }      
}

export default ClassComponent