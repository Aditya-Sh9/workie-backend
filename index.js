import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Database Connection
const MONGO_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/workie_db';

mongoose.connect(MONGO_URI)
  .then(() => console.log('✅ MongoDB Connected'))
  .catch(err => console.error('❌ MongoDB Connection Error:', err));

// Define Schema
const BookingSchema = new mongoose.Schema({
    bookingType: String,
    seats: String,
    fullName: String,
    phone: String,
    email: String,
    date: { type: Date, default: Date.now }
});

const Booking = mongoose.model('Booking', BookingSchema);

const ContactSchema = new mongoose.Schema({
    fullName: String,
    email: String,
    phone: String,
    companyName: String,
    city: String,
    seats: String,
    message: String,
    date: { type: Date, default: Date.now }
});
const ContactQuery = mongoose.model('ContactQuery', ContactSchema);

const PropertySchema = new mongoose.Schema({
    title: String,
    location: String, // e.g., "Indore", "Pune"
    type: String,     // e.g., "Coworking", "Office Space", "Virtual"
    subType: String,  // e.g., "Cabin", "Open Desk", "Meeting Room"
    image: String,
    address: String,  // Short description like "Plot No 12, Opposite..."
    price: String     // Optional
});

const Property = mongoose.model('Property', PropertySchema);

// API Routes
app.get('/', (req, res) => {
    res.send('Workie Backend is Running!');
});

app.post('/api/bookings', async (req, res) => {
    try {
        const newBooking = new Booking(req.body);
        await newBooking.save();
        res.status(201).json({ message: 'Booking Saved Successfully!' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to save booking' });
    }
});

app.post('/api/contact', async (req, res) => {
    try {
        const newContact = new ContactQuery(req.body);
        await newContact.save();
        res.status(201).json({ message: 'Contact Query Sent Successfully!' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to send message' });
    }
});

app.get('/api/properties', async (req, res) => {
    try {
        const { locations, types, subTypes } = req.query;
        
        let query = {};

        // Filter by Location (if provided)
        if (locations) {
            const locArray = locations.split(','); // "Indore,Pune" -> ["Indore", "Pune"]
            query.location = { $in: locArray.map(l => new RegExp(l, 'i')) }; // Case-insensitive
        }

        // Filter by Type (Coworking, etc.)
        if (types) {
             query.type = { $in: types.split(',') };
        }
        
        // Filter by SubType (Cabin, Meeting Room)
        if (subTypes) {
             query.subType = { $in: subTypes.split(',') };
        }

        const properties = await Property.find(query);
        res.json(properties);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch properties' });
    }
});

// ... existing schemas ...

// --- 4. INCUBATOR APPLICATION SCHEMA ---
const IncubatorSchema = new mongoose.Schema({
    // Personal Details
    fullName: String,
    email: String,
    contactNumber: String,
    whatsappNumber: String,
    address: String,
    city: String,
    state: String,
    
    // Company Details
    companyName: String,
    companyWebsite: String,
    founderName: String,
    coFounderName: String,
    mobileNumber: String,
    telephone: String,
    companyAddress: String,
    companyCity: String,
    companyState: String,
    foundedDate: String,
    expectations: String,
    pitchDeckLink: String, // Storing URL/Link for simplicity
    
    submittedAt: { type: Date, default: Date.now }
});

const IncubatorApp = mongoose.model('IncubatorApp', IncubatorSchema);

// --- INCUBATOR ROUTE ---
app.post('/api/incubator', async (req, res) => {
    try {
        const newApp = new IncubatorApp(req.body);
        await newApp.save();
        res.status(201).json({ message: 'Application Submitted Successfully!' });
    } catch (error) {
        console.error("Incubator Error:", error);
        res.status(500).json({ error: 'Failed to submit application' });
    }
});

// ... existing routes ...


// Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
