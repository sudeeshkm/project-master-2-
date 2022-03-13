module.exports = {
    formate: 'A3',
    orientation: 'portrait',
    border: '2mm',
    header: {
        height: '15mm',
        
    },
    footer: {
        height: '20mm',
        contents: {
            
            default: '<span style="color: #444;">{{page}}</span>/<span>{{pages}}</span>', 
            
        }
    }
}