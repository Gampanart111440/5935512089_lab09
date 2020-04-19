let express = require('express')
let app = express()

let data_fishs = [
    {
        'id': 1,
        'local_name': 'ป๋าต๋อง',
        'common_name': 'ปลาสลาด',
        'scientific_name': 'Notopterus notopterus',
        'image': 'https://4.bp.blogspot.com/-B5lNXtPJ288/TfCR7x8GuiI/AAAAAAAAAwo/5GAPVYW0gLY/s400/Notopterus+notopterus+%2528FOLI%2529.jpg',
        'fish_detail': 'ปลาสลาด หรือ ปลาฉลาด เป็นปลาน้ำจืดชนิดหนึ่ง มีชื่อวิทยาศาสตร์ว่า Notopterus notopterus อยู่ในวงศ์ปลากราย มีปากกว้างไม่เกินลูกตาเหมือนปลาในวงศ์นี้ชนิดอื่น ๆ พื้นลำตัวมีสีเรียบ ยกเว้นปลาวัยอ่อนจะมีลายบั้งเหมือนปลากราย วัยอ่อน จมูกมีสองคู่ คู่หน้ายื่นออกมาคล้ายหลอดหรือหนวด',
        'like': 0
    },
    {
        'id': 0,
        'local_name': 'ป๋ามะแปบ',
        'common_name': 'ปลาน้ำหมึก',
        'scientific_name': 'Opsarius sp.',
        'image': 'https://upload.wikimedia.org/wikipedia/commons/f/fb/OP2.jpg',
        'fish_detail': 'ปลาน้ำหมึก เป็นปลาน้ำจืดชนิดหนึ่ง มีชื่อวิทยาศาสตร์ว่า Opsarius pulchellus อยู่ในวงศ์ปลาตะเพียน รูปร่างคล้ายปลาน้ำหมึกโคราช ซึ่งเป็นปลาในสกุลเดียวกัน ต่างกันที่น้ำหมึกมีลำตัวที่ป้อมสั้นกว่า ปลายปากป้าน มีสีสันที่สดใสกว่าและลายขีดข้างลำตัวใหญ่และชัดเจนกว่า เกล็ดมีขนาดใหญ่กว่า ครีบหลังมีแต้มสีแดงเห็นชัดเจน',
        'like': 0
    },
]

app.get('/', (req, res) => {
    console.log('Hello world')
    res.send('Hello world')
})

app.get('/datafish', (req, res) => {
    console.log('Fish Data')
    res.json(data_fishs)
})

app.get('/crash', (reg, res) => {
    console.log('Crash!!')
    res.send('Crash')
    process.exit(1)
})

app.listen(process.env.PORT,
    () => console.log('Server is running', process.env.PORT))