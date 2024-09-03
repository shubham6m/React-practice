function SubHead(){
  // let time = '12:23:43'
  let time = new Date();
  return <div>
    <h3>This clock shows time : {time.toLocaleDateString()} - {time.toLocaleTimeString()} </h3>
  </div>
}

export default SubHead;