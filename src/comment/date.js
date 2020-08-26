function date (date){
    var d=new Date(date);
    // var date = d.setDate(date)
    var year = d.getFullYear();
    var month = d.getMonth() + 1;
    var day = d.getDate() <10 ? '0' + d.getDate() : '' + d.getDate();
    var hour = d.getHours();
    var minutes = d.getMinutes();
    var seconds = d.getSeconds();
    return year+ '-' + month + '-' + day + ' ' + hour + ':' + minutes + ':' + seconds;
}
export default date;