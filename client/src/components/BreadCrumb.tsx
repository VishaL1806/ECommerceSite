import { Link, useLocation } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbSeparator } from "./ui/breadcrumb";


const BreadCrumb = () => {
    const location = useLocation().pathname.split("/");
    const getPathName = (path : string)=>{
        const pathFinal :string[] = []
        path.split("-").forEach(fragment => {
            fragment = decodeURI(fragment)
            pathFinal.push(fragment.charAt(0).toUpperCase() + fragment.slice(1))
        });
        return pathFinal.join(" ")
    }
    
  return (
    <Breadcrumb>
    <BreadcrumbList>
      {location.map((path, index) => {
        return (
          <>
            <BreadcrumbItem key={index}>
              <Link to={`/${location[index]}`}>{index===0?"Home":getPathName(path)}</Link>
            </BreadcrumbItem>
            {index<location.length-1 && <BreadcrumbSeparator />}
          </>
        );
      })}
    </BreadcrumbList>
  </Breadcrumb>
  )
}

export default BreadCrumb