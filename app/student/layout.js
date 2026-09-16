import Nav from '@/components/Nav'; 
import Sidebar from '@/components/Sidebar';
export default function Layout({children}){
    return <><Nav/>
    <div className="dash">
        <Sidebar/>
        {children}
    </div>
</>}
