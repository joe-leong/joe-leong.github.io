const data = [
    {
        name: '米斯特吴',
        age: 30,
        gender: '男',
        lookingfor: '女',
        location: '北京',
        image: 'https://randomuser.me/api/portraits/men/82.jpg'
    },
    {
        name: '吴先生',
        age: 32,
        gender: '男',
        lookingfor: '女',
        location: '上海',
        image: 'https://randomuser.me/api/portraits/men/83.jpg'
    },
    {
        name: '李女士',
        age: 24,
        gender: '女',
        lookingfor: '男',
        location: '北京',
        image: 'https://randomuser.me/api/portraits/women/83.jpg'
    }
];

function getData(data) {
    let next = 0;
    return {
        next: function () {
            return next < data.length ?
                { value: data[next++], done: false } : { value: undefined, done: true }
        }
    }

}
const profileData = getData(data); 

document.getElementById('next').addEventListener('click', goToNext);

function goToNext() {
    const currentData = profileData.next().value;

    if (currentData != undefined) {
        
        document.getElementById('imgDisplay').innerHTML = `
        <img src="${currentData.image}" >
        `;
        document.getElementById('profileDisplay').innerHTML = `
        <ul class="list-group">
            <li class="list-group-item">姓名:${currentData.name}</li>
            <li class="list-group-item">年龄:${currentData.age}</li>
            <li class="list-group-item">位置:${currentData.location}</li>
            <li class="list-group-item">诉求:${currentData.gender}需要寻找${currentData.lookingfor}朋友</li>
        </ul>
        `;
        
    } else {
        window.location.reload();
    }


}