import { Route, BrowserRouter as Router,Routes, useParams } from "react-router-dom"

const UserProfile = () => {
    let { userID } = useParams();
    return <h2>User Profile ID: {userID}</h2>;
}

const Page14 = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="user/:userID" element={<UserProfile />}  />
                </Routes>
            </Router>
            
        </>
    )
}

export default Page14