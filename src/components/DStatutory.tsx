

const DStatutory:React.FC = () => {
  return (
    <div className="statutory-wrapper">
      
      <div className="salary-info-container">
        <h2>Basic Salary Information</h2>
        <div className="salary-info">
          <div>
            <p>Salary basis</p>
            <select name="salary-basis" id="salary">
              <option value="option1">Select salary basis type</option>
              <option value="option2">Hourly</option>
              <option value="option3">Daily</option>
              <option value="option4">Weekly</option>
              <option value="option5">Monthly</option>
            </select>
          </div>
          <div>
            <p>Salary amount</p>
            <input type="text" placeholder="0.00" />
          </div>
          <div>
            <p>Payment type</p>
            <select name="salary-basis" id="salary">
              <option value="option1">Select payment type</option>
              <option value="option1">Bank transfer</option>
              <option value="option1">Check</option>
              <option value="option1">Cash</option>
            </select>
          </div>
        </div>
      </div>

      <div className="PF-info-container">
        <h2>PF Information</h2>
        <div className="PF-info"> 
          <div>
            <div>
              <p>PF contribution</p>
              <select name="pf-contribution" id="pf">
                <option value="option1">Select PF contribution </option>
                <option value="option1">Yes</option>
                <option value="option1">No</option>
              </select>
            </div>
            <div>
              <p>PF No.</p>
              <select name="pf-contribution" id="pf">
                <option value="option1">Select PF contribution </option>
                <option value="option1">Yes</option>
                <option value="option1">No</option>
              </select>
            </div>
          </div>

          <div>
            <div>
              <p>Employee PF rate</p>
              <select name="pf-contribution" id="pf">
                <option value="option1">Select PF contribution </option>
                <option value="option1">Yes</option>
                <option value="option1">No</option>
              </select>
            </div>
            <div>
              <p>Additional rate</p>
              <select name="pf-contribution" id="pf">
                <option value="option1">Select additional rate </option>
                <option value="option2">0%</option>
                <option value="option3">1%</option>
                <option value="option4">2%</option>
                <option value="option5">3%</option>
                <option value="option6">4%</option>
                <option value="option7">5%</option>
                <option value="option8">6%</option>
                <option value="option9">7%</option>
                <option value="option10">8%</option>
                <option value="option11">9%</option>
                <option value="option12">10%</option>
              </select>
            </div>
            <div>
              <p>Total rate</p>
              <input type="text" placeholder="11%" />
            </div>
          </div>

          <div>
            <div>
              <p>Employee PF rate</p>
              <select name="pf-contribution" id="pf">
                <option value="option1">Select PF contribution </option>
                <option value="option1">Yes</option>
                <option value="option1">No</option>
              </select>
            </div>
            <div>
              <p>Additional rate</p>
              <select name="pf-contribution" id="pf">
                <option value="option1">Select additional rate </option>
                <option value="option2">0%</option>
                <option value="option3">1%</option>
                <option value="option4">2%</option>
                <option value="option5">3%</option>
                <option value="option6">4%</option>
                <option value="option7">5%</option>
                <option value="option8">6%</option>
                <option value="option9">7%</option>
                <option value="option10">8%</option>
                <option value="option11">9%</option>
                <option value="option12">10%</option>
              </select>
            </div>
            <div>
              <p>Total rate</p>
              <input type="text" placeholder="11%" />
            </div>
          </div>
          </div>
      </div>

      <div className="ESI-info-container">
        <h2>ESI Information</h2>

        <div className="ESI-info">
          <div>
            <div>
              <p>ESI contribution</p>
              <select name="pf-contribution" id="pf">
                <option value="option1">Select ESI contribution </option>
                <option value="option1">Yes</option>
                <option value="option1">No</option>
              </select>
            </div>
            <div>
              <p>ESI No.</p>
              <select name="pf-contribution" id="pf">
                <option value="option1">Select ESI contribution </option>
                <option value="option1">Yes</option>
                <option value="option1">No</option>
              </select>
            </div>
          </div>

          <div>
            <div>
              <p>Employee ESI rate</p>
              <select name="pf-contribution" id="pf">
                <option value="option1">Select ESI contribution </option>
                <option value="option1">Yes</option>
                <option value="option1">No</option>
              </select>
            </div>
            <div>
              <p>Additional rate</p>
              <select name="pf-contribution" id="pf">
                <option value="option1">Select additional rate </option>
                <option value="option2">0%</option>
                <option value="option3">1%</option>
                <option value="option4">2%</option>
                <option value="option5">3%</option>
                <option value="option6">4%</option>
                <option value="option7">5%</option>
                <option value="option8">6%</option>
                <option value="option9">7%</option>
                <option value="option10">8%</option>
                <option value="option11">9%</option>
                <option value="option12">10%</option>
              </select>
            </div>
            <div>
              <p>Total rate</p>
              <input type="text" placeholder="11%" />
            </div>
          </div>
        </div>
      </div>

      <div className="save">
        <button>
          Save
        </button>
      </div>
    </div>
  )
}

export default DStatutory
