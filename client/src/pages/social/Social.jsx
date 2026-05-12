import React from 'react'

const Social = () => {
  return (
     <div className="container">
      {/* <h1 className='heading-text'>Social</h1> */}
      <div className="social-left-col">
          <div className="profile_wrapper">
            <div className="profile_background">

            </div>
            <div className="profile-details-container">
              <div className="profile-image">
                <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMGltfGVufDB8fDB8fHww&w=1000&q=80" alt="Profile" className="profile-pic" />
              </div>
              <div className="profile-name-and-role">
                <h2 className="profile-name">John Doe</h2>
                <p className="profile-role">Administrator</p>
              </div>
            </div>
            
          </div>
      </div>
      <div className="social-middle-col">

      </div>
      <div className="social-right-col">
          <div className="upcoming-birthday-wrapper">
            <h2 className="upcoming-birthday-heading">Upcoming Birthdays</h2>

          </div>
          
      </div>
    </div>
  )
}

export default Social
