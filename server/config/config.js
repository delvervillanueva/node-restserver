
// ========================================
// PUERTO
// ========================================
process.env.PORT = process.env.PORT || 3000;


// ========================================
// ENTORNO
// ========================================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// ========================================
// Vencimiento del Token
// ========================================
//60 segudos
//60 minutos
//24 horas
//30 días
process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;

// ========================================
// SEED de autenticación
// ========================================
process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo';


// ========================================
// BASE DE DATOS
// ========================================
let urlDB;

if(process.env.NODE_ENV === 'dev'){
    urlDB = 'mongodb://localhost:27017/cafe';
}else{
    urlDB = process.env.MONGO_URI;
}

process.env.URLDB = urlDB;



// ========================================
// Google Client Id
// ========================================

process.env.CLIENT_ID = process.env.CLIENT_ID || '827000830356-1i9vuact7043k922o3pf8l4gmrlck8v0.apps.googleusercontent.com'

