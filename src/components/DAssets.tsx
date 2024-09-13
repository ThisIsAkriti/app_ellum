
const DAssets:React.FC = () => {
  return (
    <div className="assets-wrapper">
      <div className="assets-heading">
        <div>#</div>
        <div>Name</div>
        <div>Asset ID</div>
        <div>Assigned Date</div>
        <div>Assignee</div>
      </div>

      <div className="assets-compoponent-container">
        <div className="assets-component">
          <div>1</div>
          <div className="name">Laptop</div>
          <div>AST-001</div>
          <div>12Nov,2024 10:32AM</div>
          <div className="assignee">John Paul Raj</div>
        </div>
        
      </div>
      
    </div>
  )
}

export default DAssets
