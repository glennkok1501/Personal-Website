const ImgView = ({img}) => {
    return (
            <div className="text-center bg-white rounded p-3">
                <img src={img} alt='project_img' className="img-fluid rounded bg-white" />
            </div>
     );
}
 
export default ImgView;