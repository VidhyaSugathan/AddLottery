// import "../styles/Lineselector.css";
// import { useState } from "react";
// import { AiOutlineClose } from "react-icons/ai";
// import { TbArrowsShuffle } from "react-icons/tb";
// export default function Lineselector() {
//     const [count, setCount] = useState(0);

//     const [arr, setArr] = useState(

//         [{ value: 1, selected: false }, { value: 2, selected: false }, { value: 3, selected: false }, { value: 4, selected: false },
//         { value: 5, selected: false }, { value: 6, selected: false }, { value: 7, selected: false }, { value: 8, selected: false },
//         { value: 9, selected: false }, { value: 10, selected: false }, { value: 11, selected: false }, { value: 12, selected: false },
//         { value: 13, selected: false }, { value: 14, selected: false }, { value: 15, selected: false }, { value: 16, selected: false },
//         { value: 17, selected: false }, { value: 18, selected: false }, { value: 19, selected: false }, { value: 20, selected: false },
//         { value: 21, selected: false }, { value: 22, selected: false }, { value: 23, selected: false }, { value: 24, selected: false },
//         { value: 25, selected: false }, { value: 26, selected: false }, { value: 27, selected: false }, { value: 28, selected: false },
//         { value: 29, selected: false }, { value: 30, selected: false }, { value: 31, selected: false }, { value: 32, selected: false },
//         { value: 33, selected: false }, { value: 34, selected: false }, { value: 35, selected: false }, { value: 36, selected: false },
//         { value: 37, selected: false }, { value: 38, selected: false }, { value: 39, selected: false }, { value: 40, selected: false },
//         { value: 41, selected: false }, { value: 42, selected: false }, { value: 43, selected: false }, { value: 44, selected: false },
//         { value: 45, selected: false }, { value: 46, selected: false }, { value: 47, selected: false }, { value: 48, selected: false },
//         { value: 49, selected: false }]);


//     const handleClick = (itm, indx) => {
//         console.log("Hi")
//         let temp = [...arr];
//         // var count=0;
        
//         temp[indx].selected = temp[indx].selected ? false : true;

//         setArr(temp)


//         console.log(temp)
//         // console.log(count)
//     }
//     for (var i = 0; i <= 49; i++) {

//         if (arr.selected == true)
//             // alert("hi")
//             setCount(count + 1)
//         // console.log(c)
//     }


//     return (
//         <div className="Lineselector">
//             <div className="Lineselector1">
//                 <div className="Header">LINE 1</div>
//                 <div className="Middle">
//                     <>
//                         {
//                             arr.map((itm, indx) => {
//                                 return (
//                                     <>
//                                         <button key={itm} onClick={() => {
//                                             handleClick(itm, indx)
                                        
//                                         }} style={{ backgroundColor: itm.selected === true ? "#3ea6d6" : "white" }}>{indx + 1}
//                                         </button>
//                                     </>
//                                 )

//                             })
//                         }
//                         {/* {count} */}
//                     </>
//                 </div>
//                 <div className="Footer">
//                     <button> <TbArrowsShuffle /></button>
//                     <button> <AiOutlineClose /></button>
//                 </div>
//             </div>
//             <div className="Lineselector2">
//                 <div className="Header">LINE 1</div>
//                 <div className="Middle">
//                     <>
//                         {
//                             arr.map((itm, indx) => {
//                                 return (
//                                     <>
//                                         <button key={itm} onClick={() => {
//                                             handleClick(itm, indx)
//                                         }} style={{ backgroundColor: itm.selected === true ? "#3ea6d6" : "white" }}>{indx + 1}
//                                         </button>
//                                     </>
//                                 )

//                             })
//                         }
//                         {/* {count} */}
//                     </>
//                 </div>
//                 <div className="Footer">
//                     <button> <TbArrowsShuffle /></button>
//                     <button> <AiOutlineClose /></button>
//                 </div>
//             </div>
//             <div className="Lineselector3">
//                 <div className="Header">LINE 1</div>
//                 <div className="Middle">
//                     <>
//                         {
//                             arr.map((itm, indx) => {
//                                 return (
//                                     <>
//                                         <button key={itm} onClick={() => {
//                                             handleClick(itm, indx)
//                                         }} style={{ backgroundColor: itm.selected === true ? "#3ea6d6" : "white" }}>{indx + 1}
//                                         </button>
//                                     </>
//                                 )

//                             })
//                         }
//                         {/* {count} */}
//                     </>
//                 </div>
//                 <div className="Footer">
//                     <button> <TbArrowsShuffle /></button>
//                     <button> <AiOutlineClose /></button>
//                 </div>
//             </div>
//             <div className="Lineselector4">
//                 <div className="Header">LINE 1</div>
//                 <div className="Middle">
//                     <>
//                         {
//                             arr.map((itm, indx) => {
//                                 return (
//                                     <>
//                                         <button key={itm} onClick={() => {
//                                             handleClick(itm, indx)
//                                         }} style={{ backgroundColor: itm.selected === true ? "#3ea6d6" : "white" }}>{indx + 1}
//                                         </button>
//                                     </>
//                                 )

//                             })
//                         }
//                         {/* {count} */}
//                     </>
//                 </div>
//                 <div className="Footer">
//                     <button> <TbArrowsShuffle /></button>
//                     <button> <AiOutlineClose /></button>
//                 </div>
//             </div>
//             <div className="Lineselector5">
//                 <div className="Header">LINE 1</div>
//                 <div className="Middle">
//                     <>
//                         {
//                             arr.map((itm, indx) => {
//                                 return (
//                                     <>
//                                         <button key={itm} onClick={() => {
//                                             handleClick(itm, indx)
//                                         }} style={{ backgroundColor: itm.selected === true ? "#3ea6d6" : "white" }}>{indx + 1}
//                                         </button>
//                                     </>
//                                 )

//                             })
//                         }
//                         {/* {count} */}
//                     </>
//                 </div>
//                 <div className="Footer">
//                     <button> <TbArrowsShuffle /></button>
//                     <button> <AiOutlineClose /></button>
//                 </div>
//             </div>
//         </div>
//     )
// }
// ;
import "../styles/Lineselector.css";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { TbArrowsShuffle } from "react-icons/tb";
export default function Lineselector({ label1 }) {
    const[count,setCount]=useState(0);
    const [temparr, setTemparr] = useState([]);
    const [arr, setArr] = useState(

        [{ value: 1, selected: false }, { value: 2, selected: false }, { value: 3, selected: false }, { value: 4, selected: false },
        { value: 5, selected: false }, { value: 6, selected: false }, { value: 7, selected: false }, { value: 8, selected: false },
        { value: 9, selected: false }, { value: 10, selected: false }, { value: 11, selected: false }, { value: 12, selected: false },
        { value: 13, selected: false }, { value: 14, selected: false }, { value: 15, selected: false }, { value: 16, selected: false },
        { value: 17, selected: false }, { value: 18, selected: false }, { value: 19, selected: false }, { value: 20, selected: false },
        { value: 21, selected: false }, { value: 22, selected: false }, { value: 23, selected: false }, { value: 24, selected: false },
        { value: 25, selected: false }, { value: 26, selected: false }, { value: 27, selected: false }, { value: 28, selected: false },
        { value: 29, selected: false }, { value: 30, selected: false }, { value: 31, selected: false }, { value: 32, selected: false },
        { value: 33, selected: false }, { value: 34, selected: false }, { value: 35, selected: false }, { value: 36, selected: false },
        { value: 37, selected: false }, { value: 38, selected: false }, { value: 39, selected: false }, { value: 40, selected: false },
        { value: 41, selected: false }, { value: 42, selected: false }, { value: 43, selected: false }, { value: 44, selected: false },
        { value: 45, selected: false }, { value: 46, selected: false }, { value: 47, selected: false }, { value: 48, selected: false },
        { value: 49, selected: false }]);


    const handleClick = (itm, indx) => {
        const temp = [...arr];

        temp[indx].selected = temp[indx].selected
          ? false
          : true;
    
        if (count <= 5) {
          if (temp[indx].selected == true) {
            setCount(count + 1);

          } else {
            setCount(count - 1);
          }
        
        }
        if (count == 5) {
          temp[indx].selected = temp[indx].selected
            ? true:false;
        }
        
    
        console.log(temp);
        console.log(count)
      };
      
    const resetButton =()=>{
      setArr()
    }
   const shuffle = () => {
    let ta = [];
    let test = [];
    let randomnum = [];
    let r;
    console.log(test);
    const randomarray = [];
    while (randomnum.length < 5) {
      r = Math.floor(Math.random() * 49) + 1;
      if (randomnum.indexOf(r) == -1) {
        randomnum.push(r);
      }
      ta.push({ value: r, selected: true });
      console.log(ta);
    }
    // while (ta.length < 5) {
    //   r = Math.floor(Math.random() * 49) + 1;
    //   if(ta.indexOf(r) === -1)
    //   ta.push(r);
    //   const uniqunum=ta.filter(element=>{
    //     const isdupli=ta.includes(element)
    //     if(!isdupli){
    //       ta.push({ value: r, selected: true });
    //     }
    //   })

    // }

    const tempa = [...arr];
    for (const eleent of tempa) {
      eleent.selected = false;
    }
    for (const eleent of tempa) {
      for (const elt of ta) {
        if (eleent.value == elt.value) {
          eleent.selected = true;
          test.push({ value: eleent.value, selected: true });
        }
      }
    }

    setArr(tempa);

    // console.log(test);
  };
    return (
        <div className="Lineselector">
            <div className="Lineselector_Header">{ label1 }</div>
            <div className="Lineselector_Middle">

                <>

                    {
                        arr.map((itm, indx) => {
                            return (
                                <>
                                    <button key={itm} onClick={() => {
                                        handleClick(itm, indx)
                                    }} style={{ backgroundColor: itm.selected === true ? "#3ea6d6" : "white" }}>{indx + 1}
                            
                                    </button>
                                


                                </>
                            )

                        })
                    }
{/* {count} */}
                </>



            </div>
            <div className="Lineselector_Footer">
                <button> <TbArrowsShuffle onClick={shuffle}  /></button>
                <button> <AiOutlineClose onClick={resetButton}/></button>


            </div>

        </div>
    )
}
;