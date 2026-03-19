const app = require('./api/index');
const PORT = 5000;

app.listen(PORT, () => {
    console.log(`🚀 Server lokal siap! Buka http://localhost:${PORT}`);
    console.log('Silakan edit desain di dalam file api/index.js');
});