// server/seed.js
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/workie_db';

mongoose.connect(MONGO_URI)
  .then(() => console.log('✅ MongoDB Connected'))
  .catch(err => console.error(err));

const PropertySchema = new mongoose.Schema({
    title: String,
    location: String,
    type: String,
    subType: String,
    image: String,
    address: String,
});

const Property = mongoose.model('Property', PropertySchema);

const sampleProperties = [
    { title: "Workie Balewadi One HQ Pune", location: "Pune", type: "Office Space Solutions", subType: "Managed Office Spaces", address: "Workie Balewadi One HQ, Balewadi, Pune", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80&sig=1" },
    { title: "A17 And A18 IT Park Badwai", location: "Bhopal", type: "Co-working Spaces", subType: "Cabin Spaces", address: "A17 & A18 IT Park, Badwai, Bhopal", image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80&sig=2" },
    { title: "Chandigarh Conference Centre", location: "Chandigarh", type: "Meeting and Events", subType: "Conference Rooms", address: "Sector 17, Chandigarh", image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80&sig=3" },
    { title: "Rupa Sapphire Hub", location: "Navi Mumbai", type: "Co-working Spaces", subType: "Open Desk Space", address: "Sector 18, Navi Mumbai", image: "https://images.unsplash.com/photo-1504384308090-c54be3855833?auto=format&fit=crop&w=800&q=80&sig=4" },
    { title: "Corporate Park Indore", location: "Indore", type: "Office Space Solutions", subType: "Managed Office Spaces", address: "Corporate Park, Vijay Nagar, Indore", image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80&sig=5" },

    { title: "Workie BKC Cowork Mumbai", location: "Mumbai", type: "Co-working Spaces", subType: "Open Desk Space", address: "Bandra Kurla Complex, Mumbai", image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80&sig=6" },
    { title: "DLF Cyber Hub Office - Delhi NCR", location: "Delhi NCR", type: "Office Space Solutions", subType: "Managed Office Spaces", address: "DLF Cyber City, Delhi NCR", image: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=800&q=80&sig=7" },
    { title: "Koramangala CoWork", location: "Bangalore", type: "Co-working Spaces", subType: "Cabin Spaces", address: "Koramangala 5th Block, Bangalore", image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80&sig=8" },
    { title: "Hitech City Suites", location: "Hyderabad", type: "Office Space Solutions", subType: "Managed Office Spaces", address: "Hitech City, Hyderabad", image: "https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?auto=format&fit=crop&w=800&q=80&sig=9" },
    { title: "Anna Nagar Meeting Rooms", location: "Chennai", type: "Meeting and Events", subType: "Conference Rooms", address: "Anna Nagar, Chennai", image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80&sig=10" },

    { title: "Ahmedabad Business Center", location: "Ahmedabad", type: "Office Space Solutions", subType: "Managed Office Spaces", address: "Prahlad Nagar, Ahmedabad", image: "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?auto=format&fit=crop&w=800&q=80&sig=11" },
    { title: "Surat CoWorking Hub", location: "Surat", type: "Co-working Spaces", subType: "Open Desk Space", address: "Ring Road, Surat", image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&q=80&sig=12" },
    { title: "Vadodara Executive Offices", location: "Vadodara", type: "Office Space Solutions", subType: "Managed Office Spaces", address: "Alkapuri, Vadodara", image: "https://images.unsplash.com/photo-1505691723518-36a5b6f8b1b2?auto=format&fit=crop&w=800&q=80&sig=13" },
    { title: "Rajkot Meeting & Events", location: "Rajkot", type: "Meeting and Events", subType: "Conference Rooms", address: "Rajkot Central, Rajkot", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80&sig=14" },
    { title: "Jaipur CoWork Station", location: "Jaipur", type: "Co-working Spaces", subType: "Cabin Spaces", address: "Bani Park, Jaipur", image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80&sig=15" },

    { title: "Jodhpur Urban Offices", location: "Jodhpur", type: "Office Space Solutions", subType: "Managed Office Spaces", address: "Ratanada, Jodhpur", image: "https://images.unsplash.com/photo-1541835767-7ec0d0dbd54f?auto=format&fit=crop&w=800&q=80&sig=16" },
    { title: "Lucknow Workspaces", location: "Lucknow", type: "Office Space Solutions", subType: "Managed Office Spaces", address: "Hazratganj, Lucknow", image: "https://images.unsplash.com/photo-1505692794403-9f5a4a57b6f6?auto=format&fit=crop&w=800&q=80&sig=17" },
    { title: "Kanpur Hub", location: "Kanpur", type: "Co-working Spaces", subType: "Open Desk Space", address: "Kidwai Nagar, Kanpur", image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=800&q=80&sig=18" },
    { title: "Noida Sector 18 Offices", location: "Noida", type: "Office Space Solutions", subType: "Managed Office Spaces", address: "Sector 18, Noida", image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80&sig=19" },
    { title: "Gurgaon Startup Pods", location: "Gurugram", type: "Co-working Spaces", subType: "Cabin Spaces", address: "Golf Course Road, Gurugram", image: "https://images.unsplash.com/photo-1503389152950-2b8d9f6b9f57?auto=format&fit=crop&w=800&q=80&sig=20" },

    { title: "Faridabad Business Suites", location: "Faridabad", type: "Office Space Solutions", subType: "Managed Office Spaces", address: "Sector 15, Faridabad", image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80&sig=21" },
    { title: "Ludhiana CoWorking", location: "Ludhiana", type: "Co-working Spaces", subType: "Open Desk Space", address: "Model Town, Ludhiana", image: "https://images.unsplash.com/photo-1520975915266-2c3a7ef49c5b?auto=format&fit=crop&w=800&q=80&sig=22" },
    { title: "Coimbatore Office Park", location: "Coimbatore", type: "Office Space Solutions", subType: "Managed Office Spaces", address: "Saravanampatti, Coimbatore", image: "https://images.unsplash.com/photo-1509223197845-458d87318791?auto=format&fit=crop&w=800&q=80&sig=23" },
    { title: "Kochi Harbour Workspaces", location: "Kochi", type: "Co-working Spaces", subType: "Cabin Spaces", address: "Marine Drive, Kochi", image: "https://images.unsplash.com/photo-1528579155892-20f8a4cf35c2?auto=format&fit=crop&w=800&q=80&sig=24" },
    { title: "Thiruvananthapuram Meeting Hub", location: "Thiruvananthapuram", type: "Meeting and Events", subType: "Conference Rooms", address: "Technopark, Trivandrum", image: "https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?auto=format&fit=crop&w=800&q=80&sig=25" },

    { title: "Visakhapatnam Seaview Offices", location: "Visakhapatnam", type: "Office Space Solutions", subType: "Managed Office Spaces", address: "Beach Road, Visakhapatnam", image: "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?auto=format&fit=crop&w=800&q=80&sig=26" },
    { title: "Vijayawada Virtual Offices", location: "Vijayawada", type: "Virtual Spaces", subType: "Virtual Offices", address: "MG Road, Vijayawada - Virtual Office", image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80&sig=27" },
    { title: "Nagpur Virtual Offices", location: "Nagpur", type: "Virtual Spaces", subType: "Virtual Offices", address: "Sitabuldi, Nagpur - Virtual Office Solutions", image: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=800&q=80&sig=28" },
    { title: "Nashik Startup Space", location: "Nashik", type: "Co-working Spaces", subType: "Cabin Spaces", address: "Shivaji Nagar, Nashik", image: "https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=800&q=80&sig=29" },
    { title: "Aurangabad Enterprise Hub", location: "Aurangabad", type: "Office Space Solutions", subType: "Managed Office Spaces", address: "CIDCO, Aurangabad", image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800&q=80&sig=30" },

    { title: "Mysore Virtual Offices", location: "Mysore", type: "Virtual Spaces", subType: "Virtual Offices", address: "Vijayanagar, Mysore - Virtual Office", image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80&sig=31" },
    { title: "Mangalore Corporate Suites", location: "Mangalore", type: "Office Space Solutions", subType: "Managed Office Spaces", address: "Town Station Road, Mangalore", image: "https://images.unsplash.com/photo-1508921235305-5c4f3e0a7b6f?auto=format&fit=crop&w=800&q=80&sig=32" },
    { title: "Patna CoWork", location: "Patna", type: "Co-working Spaces", subType: "Cabin Spaces", address: "Kankarbagh, Patna", image: "https://images.unsplash.com/photo-1506784365847-bbad939e9335?auto=format&fit=crop&w=800&q=80&sig=33" },
    { title: "Bhubaneswar Work Hub", location: "Bhubaneswar", type: "Office Space Solutions", subType: "Managed Office Spaces", address: "Kharvel Nagar, Bhubaneswar", image: "https://images.unsplash.com/photo-1505238680356-667803448bb6?auto=format&fit=crop&w=800&q=80&sig=34" },
    { title: "Guwahati Startup Centre", location: "Guwahati", type: "Co-working Spaces", subType: "Open Desk Space", address: "Beltola, Guwahati", image: "https://images.unsplash.com/photo-1522199710521-72d69614c702?auto=format&fit=crop&w=800&q=80&sig=35" },

    { title: "Raipur Tech Offices", location: "Raipur", type: "Office Space Solutions", subType: "Managed Office Spaces", address: "Fafadih, Raipur", image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80&sig=36" },
    { title: "Dehradun CoWorking", location: "Dehradun", type: "Co-working Spaces", subType: "Cabin Spaces", address: "Rajpur Road, Dehradun", image: "https://images.unsplash.com/photo-1508385082359-f0b5c57ee9a1?auto=format&fit=crop&w=800&q=80&sig=37" },
    { title: "Shimla Retreat Offices", location: "Shimla", type: "Meeting and Events", subType: "Conference Rooms", address: "The Mall Road, Shimla", image: "https://images.unsplash.com/photo-1505765052823-2a1b3ddf9ee5?auto=format&fit=crop&w=800&q=80&sig=38" },
    { title: "Srinagar Lakeside Offices", location: "Srinagar", type: "Office Space Solutions", subType: "Managed Office Spaces", address: "Srinagar CBD, Srinagar", image: "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=800&q=80&sig=39" },
    { title: "Jammu Business Park", location: "Jammu", type: "Office Space Solutions", subType: "Managed Office Spaces", address: "Sainik Colony, Jammu", image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80&sig=40" },

    { title: "Agra Meeting Rooms", location: "Agra", type: "Meeting and Events", subType: "Meeting Rooms", address: "Civil Lines, Agra - Meeting Rooms", image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80&sig=41" },
    { title: "Varanasi Workspaces", location: "Varanasi", type: "Co-working Spaces", subType: "Open Desk Space", address: "Gandhi Marg, Varanasi", image: "https://images.unsplash.com/photo-1507719652455-9f89b24d5b4a?auto=format&fit=crop&w=800&q=80&sig=42" },
    { title: "Meerut Central Offices", location: "Meerut", type: "Office Space Solutions", subType: "Managed Office Spaces", address: "Meerut Cantt, Meerut", image: "https://images.unsplash.com/photo-1483729558449-99f7e2918b76?auto=format&fit=crop&w=800&q=80&sig=43" },
    { title: "Amritsar CoWork Hub", location: "Amritsar", type: "Co-working Spaces", subType: "Cabin Spaces", address: "Ranjit Avenue, Amritsar", image: "https://images.unsplash.com/photo-1504384308090-c54be3855833?auto=format&fit=crop&w=800&q=80&sig=44" },
    { title: "Jalandhar Business Centre", location: "Jalandhar", type: "Office Space Solutions", subType: "Managed Office Spaces", address: "Model Town, Jalandhar", image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80&sig=45" },

    { title: "Kozhikode CoWork", location: "Kozhikode", type: "Co-working Spaces", subType: "Open Desk Space", address: "Mavoor Road, Kozhikode", image: "https://images.unsplash.com/photo-1520975915266-2c3a7ef49c5b?auto=format&fit=crop&w=800&q=80&sig=46" },
    { title: "Siliguri Startup Labs", location: "Siliguri", type: "Co-working Spaces", subType: "Cabin Spaces", address: "Sevoke Road, Siliguri", image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80&sig=47" },
    { title: "Dhanbad Business Suites", location: "Dhanbad", type: "Office Space Solutions", subType: "Managed Office Spaces", address: "Bistupur, Dhanbad", image: "https://images.unsplash.com/photo-1505691723518-36a5b6f8b1b2?auto=format&fit=crop&w=800&q=80&sig=48" },
    { title: "Jabalpur Central Hub", location: "Jabalpur", type: "Co-working Spaces", subType: "Open Desk Space", address: "Nehru Nagar, Jabalpur", image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80&sig=49" },
    { title: "Gwalior Executive Offices", location: "Gwalior", type: "Office Space Solutions", subType: "Managed Office Spaces", address: "City Centre, Gwalior", image: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=800&q=80&sig=50" },

    { title: "Udaipur Lakeside Meeting", location: "Udaipur", type: "Meeting and Events", subType: "Conference Rooms", address: "Lake Pichola Area, Udaipur", image: "https://images.unsplash.com/photo-1509223197845-458d87318791?auto=format&fit=crop&w=800&q=80&sig=51" },
    { title: "Ajmer Business Centre", location: "Ajmer", type: "Co-working Spaces", subType: "Cabin Spaces", address: "Pushkar Road, Ajmer", image: "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?auto=format&fit=crop&w=800&q=80&sig=52" },
    { title: "Aligarh Startup Studio", location: "Aligarh", type: "Co-working Spaces", subType: "Open Desk Space", address: "Civil Lines, Aligarh", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80&sig=53" },
    { title: "Kolhapur Corporate Park", location: "Kolhapur", type: "Office Space Solutions", subType: "Managed Office Spaces", address: "Eknathrao Wanwan Road, Kolhapur", image: "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?auto=format&fit=crop&w=800&q=80&sig=54" },
    { title: "Raebareli Business Suites", location: "Raebareli", type: "Co-working Spaces", subType: "Open Desk Space", address: "Civil Lines, Raebareli", image: "https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=800&q=80&sig=55" },

    { title: "Bokaro Enterprise Hub", location: "Bokaro", type: "Office Space Solutions", subType: "Managed Office Spaces", address: "Sector 4, Bokaro", image: "https://images.unsplash.com/photo-1520975915266-2c3a7ef49c5b?auto=format&fit=crop&w=800&q=80&sig=56" },
    { title: "Thane Cowork Hub", location: "Thane", type: "Co-working Spaces", subType: "Cabin Spaces", address: "Ghodbunder Road, Thane", image: "https://images.unsplash.com/photo-1503389152950-2b8d9f6b9f57?auto=format&fit=crop&w=800&q=80&sig=57" },
    { title: "Kurnool Meeting Rooms", location: "Kurnool", type: "Meeting and Events", subType: "Conference Rooms", address: "Gandhi Road, Kurnool", image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80&sig=58" },
    { title: "Tiruchirappalli Workspaces", location: "Tiruchirappalli", type: "Office Space Solutions", subType: "Managed Office Spaces", address: "Thillai Nagar, Tiruchirappalli", image: "https://images.unsplash.com/photo-1508921235305-5c4f3e0a7b6f?auto=format&fit=crop&w=800&q=80&sig=59" },
    { title: "Silchar Business Hub", location: "Silchar", type: "Co-working Spaces", subType: "Open Desk Space", address: "Tarapur, Silchar", image: "https://images.unsplash.com/photo-1505238680356-667803448bb6?auto=format&fit=crop&w=800&q=80&sig=60" },
    { title: "Vellore Cowork Hub", location: "Vellore", type: "Co-working Spaces", subType: "Open Desk Space", address: "KPN Road, Vellore", image: "https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=800&q=80&sig=61" }
 ];

// Assign SearchPage image filenames in rotation so server doesn't import assets
const images = [
  'SearchPage1.webp',
  'SearchPage2.webp',
  'SearchPage3.webp',
  'SearchPage4.webp'
];
sampleProperties.forEach((p, i) => {
    p.image = images[i % images.length];
});

const seedDB = async () => {
    await Property.deleteMany({});
    await Property.insertMany(sampleProperties);
    console.log("✅ Database Seeded with Sample Properties");
    mongoose.connection.close();
};

seedDB();