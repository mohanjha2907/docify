// "use client";

// import { useRef, useState, useEffect } from "react";
// import { FaCaretDown } from "react-icons/fa";

// const markers = Array.from({ length: 83 }, (_, i) => i);

// export const Ruler = () => {
//   const rulerRef = useRef<HTMLDivElement | null>(null);
//   const [isDragging, setIsDragging] = useState<"left" | "right" | null>(null);
//   const [leftMarker, setLeftMarker] = useState(56);
//   const [rightMarker, setRightMarker] = useState(200);

//   const handleMouseMove = (e: MouseEvent) => {
//     if (!isDragging || !rulerRef.current) return;
//     const rect = rulerRef.current.getBoundingClientRect();
//     let newX = e.clientX - rect.left;

//     // Clamp inside ruler bounds
//     newX = Math.max(0, Math.min(newX, rect.width));

//     if (isDragging === "left") {
//       // Prevent crossing
//       if (newX < rightMarker - 10) setLeftMarker(newX);
//     } else {
//       if (newX > leftMarker + 10) setRightMarker(newX);
//     }
//   };

//   const handleMouseUp = () => {
//     setIsDragging(null);
//   };

//   useEffect(() => {
//     window.addEventListener("mousemove", handleMouseMove);
//     window.addEventListener("mouseup", handleMouseUp);
//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//       window.removeEventListener("mouseup", handleMouseUp);
//     };
//   }, [isDragging, leftMarker, rightMarker]);

//   return (
//     <div
//       ref={rulerRef}
//       className="h-6 border-b border-gray-300 flex items-end relative select-none print:hidden"
//     >
//       <div
//         id="ruler-container"
//         className="max-w-[816px] mx-auto w-full h-full relative"
//       >
//         <Marker
//           position={leftMarker}
//           isLeft={true}
//           isDragging={isDragging === "left"}
//           onMouseDown={() => setIsDragging("left")}
//           onDoubleClick={() => setLeftMarker(56)} // reset
//         />
//         <Marker
//           position={rightMarker}
//           isLeft={false}
//           isDragging={isDragging === "right"}
//           onMouseDown={() => setIsDragging("right")}
//           onDoubleClick={() => setRightMarker(200)} // reset
//         />

//         <div className="absolute inset-x-0 bottom-0 h-full">
//           <div className="relative h-full w-[816px]">
//             {markers.map((marker) => {
//               const position = (marker * 816) / 82;
//               return (
//                 <div
//                   key={marker}
//                   className="absolute bottom-0"
//                   style={{ left: `${position}px` }}
//                 >
//                   {marker % 10 === 0 && (
//                     <>
//                       <div className="absolute bottom-0 w-[1px] h-2 bg-neutral-500" />
//                       <span className="absolute bottom-2 text-[10px] text-neutral-500 transform -translate-x-1/2">
//                         {marker / 10 + 1}
//                       </span>
//                     </>
//                   )}

//                   {marker % 5 === 0 && marker % 10 !== 0 && (
//                     <div className="absolute bottom-0 w-[1px] h-1.5 bg-neutral-500" />
//                   )}
//                   {marker % 5 !== 0 && (
//                     <div className="absolute bottom-0 w-[1px] h-1 bg-neutral-500" />
//                   )}
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// interface MarkerProps {
//   position: number;
//   isLeft: boolean;
//   isDragging: boolean;
//   onMouseDown: () => void;
//   onDoubleClick: () => void;
// }

// const Marker = ({
//   position,
//   isLeft,
//   isDragging,
//   onMouseDown,
//   onDoubleClick,
// }: MarkerProps) => {
//   return (
//     <div
//       className={`absolute top-0 w-4 h-full cursor-ew-resize z-[5] group -ml-2 ${
//         isDragging ? "opacity-70" : ""
//       }`}
//       style={{ left: `${position}px` }}
//       onMouseDown={onMouseDown}
//       onDoubleClick={onDoubleClick}
//     >
//       <FaCaretDown className="absolute left-1/2 top-0 h-full fill-blue-500 transform -translate-x-1/2" />
//     </div>
//   );
// };
