import dashboard from "../Assets/dashboard.svg"
import profile from "../Assets/profile.svg"
import createCampaign from "../Assets/createCampaign.svg"
import payment from "../Assets/payment.svg"




const Navlinks=[
    {
        name: "dashboard",
        imgUrl: dashboard,
        link: "/"
    },
    {
        name:"campaign",
        imgUrl: createCampaign,
        link: "/create-campaign",
    },
    {
        name:"profile",
        imgUrl:profile,
        link:"/profile"
    },
    {
        name: "payments",
        imgUrl: payment,
        link: "/dues",
    }
]

export default Navlinks;