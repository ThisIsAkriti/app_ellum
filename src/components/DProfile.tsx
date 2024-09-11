import React from 'react'

const DProfile:React.FC = () => {
  return (
    <div>
      <div className='Dprofile-wrapper'>
        <div className='personal-info'>
          <h2>Personal Information</h2>
          <ul>
            <li>Passport No : 
              <div>9876543210</div>
            </li>
            <li>Passport Exp : 
              <div>9876543210</div>
            </li>
            <li>Tel : 
              <div>9876543210</div>
            </li>
            <li>Nationality: 
              <div>Indie</div>
            </li>
            <li>Religion : 
              <div>Christian</div>
            </li>
            <li>Marital Status : 
              <div>Married</div>
            </li>
            <li>Employment of Spouse: 
              <div>No</div>
            </li>
            <li>No. of children : 
              <div>2</div>
            </li>
          </ul>
        </div>
        <div className='emergency-contact'>
          <div className='Ecard1'>
            <h2>Emergency Contact</h2>
            <ul>

              <li>Primary Name: 
                <div>John Doe</div>
              </li>
              <li>Relationship: 
                <div>Father</div>
              </li>
              <li>Phone:
                <div>9876543210 , 9876543210</div>
              </li>
              
            </ul>
          </div>

          <div className='Ecard2'>
            <ul>
            <li>Secondary Name: 
              <div>John Doe</div>
            </li>
            <li>Relationship: 
                <div>Brother</div>
            </li>
            <li>Phone:
              <div>9876543210 , 9876543210</div>
            </li>
            </ul>
          </div>
        </div>
      </div>

      <div className='Dprofile-wrapper'>
        <div className='bank-info'>
          <h2>Bank Information</h2>
          <ul>
            <li>Bank name
              <div>
              ICICI Bank</div>
            </li>
            <li>Bank account No. 
              <div>1478523690147</div>
            </li>
            <li>IFSC Code  
              <div>ICI2304</div>
            </li>
            <li>PAN No 
              <div>TC000Y56</div>
            </li>
          </ul>
        </div>

        <div className='family-info'>
          
          <h2>Family Informations</h2>
          <div className='family-table'>

            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Relationship</th>
                  <th>Date of Birth</th>
                  <th>Phone</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>Leo</th>
                  <th>Brother</th>
                  <th>Feb 14th , 2016</th>
                  <th>9876543210</th>
                </tr>
              </tbody>
            </table>

          </div>
    
        </div>
      </div>

      <div className='Dprofile-wrapper'>
        <div className='edu-info'>
          <h2>Education Information</h2>
          <div className='edu-info-detail'>
            <div className='detail01'>
              <div>
                <span>●</span>
              </div>
              <div>
                <div className='title'>International College of Arts and Science(UG)</div>
                <p>Bsc Computer Science</p>
                <p className='year'>2000-2003</p>
              </div>
            </div>
            <div className='detail02'>
              <div>
                <span>●</span>
              </div>
              <div>
                <div className='title'>International College of Arts and Science(PG)</div>
                <p>Msc Computer Science</p>
                <p className='year'>2003-2005</p>
              </div>
            </div>
          </div>
        </div>

        <div className='experience-info'>
          
          <h2>Experience</h2>

          <div className='exp-info-detail'>
            <div className='detail01'>
              <div>
                <span>●</span>
              </div>
              <div>
                <div className='title'>Web Designer at Zen Corporation</div>
                <p className='year'>Jan 2013-Present  (5 years 2 months)</p>
              </div>
            </div>
            <div className='detail02'>
              <div>
                <span>●</span>
              </div>
              <div>
                <div className='title'>Web Designer at Ron-tech</div>
                <p className='year'>Jan 2013-Present  (5 years 2 months)</p>
              </div>
            </div>
            <div className='detail02'>
              <div>
                <span>●</span>
              </div>
              <div>
                <div className='title'>Web Designer at Dalt Technology</div>
                <p className='year'>Jan 2013-Present  (5 years 2 months)</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default DProfile;
