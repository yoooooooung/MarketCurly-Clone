import { BarLoader } from "react-spinners";

const Loading = () => {
   return (
      <div class='contentWrap'>
         <div
            style={{
               position: 'fixed',
               top: '50%',
               left: '50%',
               transform: 'translate(-50%, -50%)',
            }}>
            <BarLoader
               color='#8a3dee'
            //    height={15}
            //    width={5}
            //    radius={2}
            //    margin={2}
            />
         </div>
      </div>
   );
};

export default Loading;