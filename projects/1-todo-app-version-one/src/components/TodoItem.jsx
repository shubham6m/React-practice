function TodoItem() {
  let name = "to college";
  let date = "12/22/12";
  return (
        <div class="container text-center">
          <div class="row">
            <div class="col-6">{name}</div>
            <div class="col-4">{date}</div>
            <div class="col-2">
              <button type="button" class="btn btn-danger">
                delete
              </button>
            </div>
          </div>
        </div>
  );
}

export default TodoItem;
