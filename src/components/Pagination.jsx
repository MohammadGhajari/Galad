import styled, {css} from "styled-components";
import {BiLeftArrow, BiRightArrow} from "react-icons/bi";


const Pagination = styled.div`
  margin: 3.2rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 20%;
  gap: 0.8rem;
  color: var(--color-grey-2);
  @media (max-width: 630px) {
    width: 30%;
  }
  @media (max-width: 630px) {
    width: 50%;
  }
`;
const Page = styled.button`
  
  width: 3.2rem;
  height: 3.2rem;
  background-color: var(--color-white-1);
  border: 1px solid var(--color-primary);
  border-radius: 50%;
  &:hover {
    background-color: var(--color-primary-tint-2);
  }
  &:first-child, &:last-child {
    border: none;
  }
  
  ${(props) => 
    props.state === 'active' && css`
      background-color: var(--color-primary);
      color: var(--color-white-1);
    `
  }
  
  
  
`;

export default function PaginationComponent({allPage, activePage, setActivePage, handleGetBooks}) {

  function handleClickPage (e) {
    setActivePage(+e.target.innerHTML);
    handleGetBooks('pagination');
  }

  function handlePrev(e) {
    setActivePage(activePage - 1);
    handleGetBooks('pagination');
  }
  function handleNext () {
    setActivePage(activePage + 1);
    handleGetBooks('pagination');
  }

  if(activePage === 1) return (
    <Pagination>
      <Page state={'active'} onClick={handleClickPage}>{activePage}</Page>
      <Page onClick={handleClickPage}>{activePage + 1}</Page>
      ...
      <Page onClick={handleClickPage}>{allPage}</Page>
      <Page onClick={handleNext}><BiRightArrow/></Page>
    </Pagination>
  )
  if(activePage === 2) return (
    <Pagination>
      <Page onClick={handlePrev}><BiLeftArrow/></Page>
      <Page onClick={handleClickPage}>{activePage - 1}</Page>
      <Page state={'active'}   onClick={handleClickPage}>{activePage}</Page>
      <Page   onClick={handleClickPage}>{activePage + 1}</Page>
      ...
      <Page   onClick={handleClickPage}>{allPage}</Page>
      <Page onClick={handleNext}><BiRightArrow/></Page>
    </Pagination>

  )
  if(activePage === 3) return (
    <Pagination>
      <Page onClick={handlePrev}><BiLeftArrow/></Page>
      <Page  onClick={handleClickPage}>{1}</Page>
      <Page   onClick={handleClickPage}>{activePage - 1}</Page>
      <Page state={'active'}  onClick={handleClickPage}>{activePage}</Page>
      <Page   onClick={handleClickPage}>{activePage + 1}</Page>
      ...
      <Page  onClick={handleClickPage}>{allPage}</Page>
      <Page onClick={handleNext}><BiRightArrow/></Page>
    </Pagination>

  )
  if(activePage > 2 && activePage < allPage - 2) return (
    <Pagination>
      <Page onClick={handlePrev}><BiLeftArrow/></Page>
      <Page   onClick={handleClickPage}>1</Page>
      ...
      <Page   onClick={handleClickPage}>{activePage - 1}</Page>
      <Page state={'active'}  onClick={handleClickPage}>{activePage}</Page>
      <Page  onClick={handleClickPage}>{activePage + 1}</Page>
      ...
      <Page  onClick={handleClickPage}>{allPage}</Page>
      <Page onClick={handleNext}><BiRightArrow/></Page>
    </Pagination>

  )
  if(activePage === allPage - 2) return (
    <Pagination>
      <Page onClick={handlePrev}><BiLeftArrow/></Page>
      <Page  onClick={handleClickPage}>1</Page>
      ...
      <Page  onClick={handleClickPage}>{activePage - 1}</Page>
      <Page state={'active'}  onClick={handleClickPage}>{activePage}</Page>
      <Page  onClick={handleClickPage}>{activePage + 1}</Page>
      <Page  onClick={handleClickPage}>{allPage}</Page>
      <Page onClick={handleNext}><BiRightArrow/></Page>

    </Pagination>

  )
  if(activePage === allPage - 1) return (
    <Pagination>
      <Page onClick={handlePrev}><BiLeftArrow/></Page>
      <Page  onClick={handleClickPage}>1</Page>
      ...
      <Page  onClick={handleClickPage}>{activePage - 1}</Page>
      <Page state={'active'}  onClick={handleClickPage}>{activePage}</Page>
      <Page  onClick={handleClickPage}>{allPage}</Page>
      <Page onClick={handleNext}><BiRightArrow/></Page>

    </Pagination>

  )
  if(activePage === allPage) return (
    <Pagination>
      <Page onClick={handlePrev}><BiLeftArrow/></Page>
      <Page  onClick={handleClickPage}>1</Page>
      ...
      <Page  onClick={handleClickPage}>{activePage - 1}</Page>
      <Page state={'active'}  onClick={handleClickPage}>{activePage}</Page>
    </Pagination>

  )


}































//
//
// import styled, {css} from "styled-components";
// import {AiOutlineArrowLeft} from "react-icons/ai";
// import {BiLeftArrow, BiRightArrow} from "react-icons/bi";
//
//
// const Pagination = styled.div`
//   margin: 3.2rem 0;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   width: 20%;
//   gap: 0.8rem;
//
// `;
// const Page = styled.button`
//   width: 3.2rem;
//   height: 3.2rem;
//   background-color: var(--color-white-1);
//   border: 1px solid var(--color-primary);
//   border-radius: 50%;
//   color: var(--grey-4);
//   &:hover {
//     background-color: var(--color-primary-tint-2);
//   }
//   &:first-child, &:last-child {
//     border: none;
//   }
//
//   ${(props) =>
//   props.state === 'active' && css`
//       background-color: var(--color-primary);
//     `
// }
//
// `;
// export default function PaginationComponent({allPage, activePage, setActivePage, handleGetBooks}) {
//
//
//   if(activePage === 1) return (
//     <Pagination>
//       <Page state={'active'} onClick={(e) => setActivePage(+e.target.innerHTML)}>{activePage}</Page>
//       <Page  onClick={(e) => setActivePage(+e.target.innerHTML)}>{activePage + 1}</Page>
//       ...
//       <Page onClick={(e) => setActivePage(+e.target.innerHTML)}>{allPage}</Page>
//       <Page onClick={() => setActivePage(activePage + 1)}><BiRightArrow/></Page>
//     </Pagination>
//   )
//   if(activePage === 2) return (
//     <Pagination>
//       <Page onClick={() => setActivePage(activePage - 1)}><BiLeftArrow/></Page>
//       <Page onClick={(e) => setActivePage(+e.target.innerHTML)}>{activePage - 1}</Page>
//       <Page state={'active'}  onClick={(e) => setActivePage(+e.target.innerHTML)}>{activePage}</Page>
//       <Page  onClick={(e) => setActivePage(+e.target.innerHTML)}>{activePage + 1}</Page>
//       ...
//       <Page  onClick={(e) => setActivePage(+e.target.innerHTML)}>{allPage}</Page>
//       <Page onClick={() => setActivePage(activePage + 1)}><BiRightArrow/></Page>
//     </Pagination>
//
//   )
//   if(activePage === 3) return (
//     <Pagination>
//       <Page onClick={() => setActivePage(activePage - 1)}><BiLeftArrow/></Page>
//       <Page onClick={(e) => setActivePage(+e.target.innerHTML)}>{1}</Page>
//       <Page  onClick={(e) => setActivePage(+e.target.innerHTML)}>{activePage - 1}</Page>
//       <Page state={'active'} onClick={(e) => setActivePage(+e.target.innerHTML)}>{activePage}</Page>
//       <Page  onClick={(e) => setActivePage(+e.target.innerHTML)}>{activePage + 1}</Page>
//       ...
//       <Page onClick={(e) => setActivePage(+e.target.innerHTML)}>{allPage}</Page>
//       <Page onClick={() => setActivePage(activePage + 1)}><BiRightArrow/></Page>
//     </Pagination>
//
//   )
//   if(activePage > 2 && activePage < allPage - 2) return (
//     <Pagination>
//       <Page onClick={() => setActivePage(activePage - 1)}><BiLeftArrow/></Page>
//       <Page  onClick={(e) => setActivePage(+e.target.innerHTML)}>1</Page>
//       ...
//       <Page  onClick={(e) => setActivePage(+e.target.innerHTML)}>{activePage - 1}</Page>
//       <Page state={'active'} onClick={(e) => setActivePage(+e.target.innerHTML)}>{activePage}</Page>
//       <Page onClick={(e) => setActivePage(+e.target.innerHTML)}>{activePage + 1}</Page>
//       ...
//       <Page onClick={(e) => setActivePage(+e.target.innerHTML)}>{allPage}</Page>
//       <Page onClick={() => setActivePage(activePage + 1)}><BiRightArrow/></Page>
//     </Pagination>
//
//   )
//   if(activePage === allPage - 2) return (
//     <Pagination>
//       <Page onClick={() => setActivePage(activePage - 1)}><BiLeftArrow/></Page>
//       <Page onClick={(e) => setActivePage(+e.target.innerHTML)}>1</Page>
//       ...
//       <Page onClick={(e) => setActivePage(+e.target.innerHTML)}>{activePage - 1}</Page>
//       <Page state={'active'} onClick={(e) => setActivePage(+e.target.innerHTML)}>{activePage}</Page>
//       <Page onClick={(e) => setActivePage(+e.target.innerHTML)}>{activePage + 1}</Page>
//       <Page onClick={(e) => setActivePage(+e.target.innerHTML)}>{allPage}</Page>
//       <Page onClick={() => setActivePage(activePage + 1)}><BiRightArrow/></Page>
//
//     </Pagination>
//
//   )
//   if(activePage === allPage - 1) return (
//     <Pagination>
//       <Page onClick={() => setActivePage(activePage - 1)}><BiLeftArrow/></Page>
//       <Page onClick={(e) => setActivePage(+e.target.innerHTML)}>1</Page>
//       ...
//       <Page onClick={(e) => setActivePage(+e.target.innerHTML)}>{activePage - 1}</Page>
//       <Page state={'active'} onClick={(e) => setActivePage(+e.target.innerHTML)}>{activePage}</Page>
//       <Page onClick={(e) => setActivePage(+e.target.innerHTML)}>{allPage}</Page>
//       <Page onClick={() => setActivePage(activePage + 1)}><BiRightArrow/></Page>
//
//     </Pagination>
//
//   )
//   if(activePage === allPage) return (
//     <Pagination>
//       <Page onClick={() => setActivePage(activePage - 1)}><BiLeftArrow/></Page>
//       <Page onClick={(e) => setActivePage(+e.target.innerHTML)}>1</Page>
//       ...
//       <Page onClick={(e) => setActivePage(+e.target.innerHTML)}>{activePage - 1}</Page>
//       <Page state={'active'} onClick={(e) => setActivePage(+e.target.innerHTML)}>{activePage}</Page>
//     </Pagination>
//
//   )
//
//
// }