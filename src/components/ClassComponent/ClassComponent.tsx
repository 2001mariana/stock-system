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
          <p>stateValue: { this.state.name }</p>
          <button onClick={() => {this.setState({...this.state, name: 'hello!!!'})}}>Alter State</button>
        </div>

        <div className="ClassComponent__props">
          Hi! I'm class component with props: {this.props.example}. 
        </div>
      </div> 
    )
  }      
}

export default ClassComponent