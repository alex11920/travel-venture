import Navbar from "../shared/Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Profile = () => {
  const { user, updatedUserProfile } = useContext(AuthContext);
  const [newUser, setNewUser] = useState(user);

  const handleProfile = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const updatedName = form.get("name");
    const updatedPhoto = form.get("photo");
    const updatedEmail = form.get("email");

    updatedUserProfile(updatedName, updatedPhoto, updatedEmail)
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className="hero pt-4">
        <div className="py-12 px-16 border rounded-md">
          <div className="text-center pb-8">
            <h1 className="text-3xl font-bold">Profile</h1>
          </div>
          <div className="card w-96">
            <form onSubmit={handleProfile}>
              {/* Photo */}
              <div className="avatar flex justify-center pb-2">
                <div className="w-24 rounded-full">
                  <img src={user.photoURL} alt="User avatar" />
                </div>
              </div>
              <div className="text-xl font-bold yellow p-2 text-center pb-4">
                <h2>{user.displayName}</h2>
              </div>
              {/* Name */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium text-base">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="input input-bordered text-sm"
                  value={newUser.displayName}
                  onChange={(e) =>
                    setNewUser({ ...newUser, displayName: e.target.value })
                  }
                  required
                />
              </div>
              {/* photoURL */}
              <div className="form-control pt-2">
                <label className="label">
                  <span className="label-text font-medium text-base">
                    PhotoURL Link
                  </span>
                </label>
                <input
                  type="url"
                  name="photo"
                  placeholder="https:/"
                  className="input input-bordered text-sm"
                  value={newUser.photoURL}
                  onChange={(e) =>
                    setNewUser({ ...newUser, photoURL: e.target.value })
                  }
                  required
                />
              </div>
              {/* Email */}
              <div className="form-control pt-2">
                <label className="label">
                  <span className="label-text font-medium text-base">
                    Email Address
                  </span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  className="input input-bordered text-sm"
                  value={newUser.email}
                  onChange={(e) =>
                    setNewUser({ ...newUser, email: e.target.value })
                  }
                  required
                />
              </div>
              {/* button */}
              <div className="form-control my-6">
                <button className="btn back-yellow">Save Profile</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
