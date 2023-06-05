import Task from "../model/task";

export default function TaskComponent(props) {
    const task = Task.fromJson(props.task);

    console.log(task);

    return (
        <>
            <div className="card mb-3 p-0" >
                <div className="row g-0">
                    <div className="col-md-4 d-flex justify-content-center align-items-center">
                        {
                            task.completed ? (
                                <i className="fas fa-check fa-3x"></i>
                            ) : (
                                <i className="fas fa-xmark fa-3x"></i>
                            )
                        }
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">  { task.title } </h5>
                            <p className="card-text">
                              { task.description}
                            </p>
                            <p className="card-text">
                                <small className="text-muted">{ task.userId}  </small>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}