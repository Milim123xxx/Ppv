const express = require('express');
const path = require('path');
const app = express();

// ให้บริการไฟล์ static
app.use(express.static(path.join(__dirname, 'public')));

// Route หน้าเว็บ
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// เริ่ม server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
