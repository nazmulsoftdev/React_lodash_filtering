import React,{useState,useEffect,useTransition} from 'react';
import lodash from 'lodash';
import "./App.css"
import HeaderComponent from './components/Header';
import CardComponent from './components/Card';
import LoadMoreComponent from './components/LoadMore';
import LoadingComponent from './components/Loading';



function App() {

  const [post,setPost] = useState([]);
  const [selectRequest,setSelectRequest] = useState(20);
  const [iscomplete,setComplete] = useState(false);
  const [index,setIndex] = useState(10);
  const [query,setQuery] = useState("");
  const [search,setSearch] = useState("");
  const [transition,setTransition] = useTransition();
  const InitialPost = lodash.slice(post, 0, index);




  useEffect(()=>{
    async function GetData(){
      let response = await fetch(
        `https://hub.dummyapis.com/employee?noofRecords=${selectRequest}&idStarts=1001`
      );
      let data = await response.json();
      setPost(data);
    };
    GetData();
  },[selectRequest]);



  // user Search request filter

  const SearchFilter = InitialPost.filter((name) => {
    return name.email.toLowerCase().includes(query.toLocaleLowerCase());
  });


  const SearchHandler = (evn)=>{

    setSearch(evn.target.value);

    setTransition(()=>setQuery(evn.target.value))

  }



  // Request API handler

 const  HandlerRequest = (e)=>{
     setSelectRequest(e.target.value);
     console.log(e.target.value);
  }

  // Load more than 10 cards each click

  const LoadmoreCard = ()=>{
    setIndex(index+10);
    if(index>=post.length){
      setComplete(true);
    }else{
      setComplete(false)
    }

  }

  return (
    <div className="App">
      <HeaderComponent
        selectRequest={selectRequest}
        HandlerRequest={HandlerRequest}
        SearchHandler={SearchHandler}
        search={search}
      />
      {transition && (
        <LoadingComponent type="spokes" width={50} height={50} color="red" />
      )}
      <CardComponent post={SearchFilter} />

      {iscomplete ? null : (
        <LoadMoreComponent
          LoadmoreCard={LoadmoreCard}
          className="LoadMoreButton"
        >
          See More
        </LoadMoreComponent>
      )}
    </div>
  );
}

export default App;


