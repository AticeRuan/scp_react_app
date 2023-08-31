

function SCP ({scp}){

return (
    <>
                <div className="jumbotron mt-5" style={{ minHeight:"85vh" }}>
                    <div >
                    <h4 className="display-4" >Item:{scp.item}</h4>
                   <h4 className="lead">Class: {scp.class}</h4>
                   <hr class="my-4"></hr>
                    </div>
                    <div ><img  src={scp.image} alt="..." className="rounded img-fluid mx-auto " style={{ width:"40vw" }} /></div>
                    <div >
                        <div >
                            <div >
                                <div >
                                   <h4 className="text-justify">Special Containment Procedures:</h4> 
                                   <p className="text-justify" >{scp.contaiment}</p>
                                   <h4 className="text-justify">Description:</h4> 
                                    <p class="text-justify" >{`${scp.description}`}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

    </>
)


}

export default SCP;