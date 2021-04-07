import { useState, useEffect } from 'react'
import styled from 'styled-components'
import CardList from './CardList'
import Filters from '../Filters/index.jsx'
import CardPopUp from './CardPopUp'
import { couldStartTrivia } from 'typescript'

const Info = styled.div`
padding: 0 32px;
box-sizing: border-box;
width: 100%;
left: 0;
position: absolute;
background: ${({ theme: { color } }) => color.WHITE_3};
`;

const CardSection = styled.div`
display: flex;
flex-direction: row;
overflow-x: scroll;
`;



const BoardContent = () => {

  const recomendedActs = ['Approve', 'Reject', 'Set Customer_1 as primary.']


  const [data, setData] = useState([]);


  // const {name,domain,definition,description} = data

  let dummyCardUndefined = []

  let SentForApproval = []

  let dummyCardCertified = []

  let dummyCardInProgress = []

  let dummyCardApproved = []

  const settingData = (funName, name, description, domain, subdomain, projectName) => {
    funName.push({
      title: name,
      description: description,
      domain: domain,
      sub_domain: subdomain,
      project: projectName,
      recomended_actions: recomendedActs[Math.floor(Math.random() * recomendedActs.length)]

    })
  }

  useEffect(() => {

    data.map((data, i) => {
      const { name, description, domain, subdomain, projectName  } = data

      if (data.status === "In Progress") {

        settingData(dummyCardInProgress, name, description, domain, subdomain, projectName)

      }
      if (data.status === "Undefined") {
        settingData(dummyCardUndefined, name, description, domain, subdomain, projectName)
      }
      if (data.status === "Pending Approval") {
        settingData(SentForApproval, name, description, domain, subdomain, projectName)
      }
      if (data.status === "Approved") {
        settingData(dummyCardApproved, name, description, domain, subdomain, projectName)
      }
      if (data.status === "Certified") {
        settingData(dummyCardCertified, name, description, domain, subdomain, projectName)
      }


    }

    )
    console.log("DUMMYCARd", ...dummyCardInProgress)

  }, [data])

  let [cardsList, setCard] = useState([]);

  let [tempCard, setTempCard] = useState("");

  let [filteredCards, setFilteredCards] = useState("");

  let [r, setR] = useState(false);

  useEffect(() => {
    setCard([
      {
        title: 'Undefined',
        className: 'undefined',
        cardType: 'primary',
        options: [...dummyCardUndefined]
      },
      {
        title: 'In Progress',
        className: 'progress',
        cardType: 'secondary',
        options: [...dummyCardInProgress]
      },
      {
        title: 'Pending Approval',
        className: 'pending',
        cardType: 'primary',
        options: [...SentForApproval]
      },
      {
        title: 'Approved',
        className: 'approved',
        cardType: 'secondary',
        options: [...dummyCardApproved]
      },
      {
        title: 'Certified',
        className: 'certified',
        cardType: 'primary',
        options: [...dummyCardCertified]
      }
    ])
  }, [data])



  useEffect(() => {

    console.log(cardsList)
    fetch("https://192.168.169.51:9900/tasks/list").then(res => res.json()).
      then(res => {
        setData(res)
      }).catch(err => { console.log(err) })
  }, [])



  const filterIt = (datas = { title: "" }, i) => {

    console.log(i);

    const temp = tempCard && datas.title != "all" ? tempCard : cardsList

    let newCard = [...temp]

    var removed = false

    if (datas.title != "all") {
      const index = newCard.findIndex(data => data.title === datas.title)
      if (index === -1) {
        removed = true
      }
      console.log("INDEX", index)
    }

    let store = newCard.filter((data, i) => {
      console.log(data.title, datas.title);
      if (data.title != datas.title) {
        return data
      }
    })

    if (removed) {
      console.log("REMOVED");
      store.splice(i - 1, 0, cardsList[i - 1])
    }
    setTempCard(store);
  }


  const lootIt = tempCard ? tempCard : cardsList

  let loopPriority = filteredCards ? filteredCards : lootIt

  useEffect(() => { console.log("CALLED IN LOOP PRIORITY") }, [loopPriority])

  const [activeCard, setActiveCard] = useState(false);


  const filterCardDetails = (feild) => {

    const current = tempCard ? tempCard : cardsList

    const loopPrioritys = filteredCards ? filteredCards : current


    let filterCard = [...loopPrioritys];

    let filteredFields = filterCard.map((data, ind) => {
      data.options.map((card, i) => {
        card[`${feild}`] = ""
      })
      return data
    })

    loopPriority = filteredFields

    setR(!r)

    console.log(loopPriority)

    // if(tempCard){
    //   setTempCard(filteredFields)
    // }else{
    //   setCard(filteredFields)
    // }


  }

  const [hide,setHide] = useState({ description : false  })

  const hideDetails = (val) => {
        setHide({ ...hide, [val] : true  })
  }


  return (
    <Info>

      {
        <>

{/* <select id="cars" name="cars" onChange={(e) => hideDetails(e.target.value)}  >
            <option value="" >   </option>
            <option  value="description" >  description  </option>
            <option value="title" >  status  </option>
          </select> */}

          <select id="cars" name="cars" onChange={(e) => filterCardDetails(e.target.value)}  >
            <option value="" >   </option>
            <option  value="description" >  description  </option>
            <option value="title" >  title  </option>
            <option value="recomended_actions" >  recomended_actions  </option>
            <option value="domain" >  domain  </option>
            <option value="subdomain" >  subdomain  </option>
          </select>
        </>
      }

      {!!activeCard && <CardPopUp handleClose={() => setActiveCard(false)} />}
      <Filters filterIt={filterIt} />
      <CardSection>
        {
          loopPriority.map((card, i) => {
            console.log(card);

            return <CardList hide = {hide} card={card} key={i} onClick={() => setActiveCard(i + 1)} />
          })
        }
      </CardSection>
      { JSON.stringify(hide)  }
    </Info>
    

  )
}

export default BoardContent