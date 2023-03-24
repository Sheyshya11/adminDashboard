import { SettingsOutlined, ChevronLeft, ChevronRightOutlined, HomeOutlined,
    ShoppingCartOutlined, Groups2Outlined, ReceiptLongOutlined,
    PublicOutlined, PointOfSaleOutlined,TodayOutlined, CalendarMonthOutlined,
    AdminPanelSettingsOutlined, TrendingUpOutlined, PieChartOutline } from '@mui/icons-material'
  
const NavItems=[{
    text:"Dashboard",
    icon:<HomeOutlined/>
},
{
    text:"Client Facing",
    icon: null,
},
{
    text:"Products",
    icon:<ShoppingCartOutlined/>
},
{
    text:"Customers",
    icon:<Groups2Outlined/>
},
{
    text:"Transactions",
    icon:<ReceiptLongOutlined/>
},
{
    text:"Geography",
    icon:<PublicOutlined/>
},
{
    text:"Sales",
    icon:null,
},
{
    text:"Overview",
    icon:<PointOfSaleOutlined/>
},
{
    text:"Daily",
    icon:<TodayOutlined/>
},
{
    text:"Monthly",
    icon:<CalendarMonthOutlined/>
},
{
    text:"Breakdown",
    icon:<PieChartOutline/>
},

{
    text:"Managment",
    icon:null,
},
{
    text:"Admin",
    icon:<AdminPanelSettingsOutlined/>
},
{
    text:"Performance",
    icon:<TrendingUpOutlined/>
},

]
export default NavItems