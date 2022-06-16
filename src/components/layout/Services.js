import { CgArrowsExchange } from 'react-icons/cg';
import { FcCurrencyExchange } from 'react-icons/fc';
import { HiOutlineDocumentReport } from 'react-icons/hi';
import { RiExchangeFundsLine } from 'react-icons/ri';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

<i class=""></i>
const Services = [
    {
      to: "/transfert",
      icon: "fas fa-box",
      icons: <CgArrowsExchange  size='2em' />,
      label: "Transfert d'argent",
    },
    {
      to: "/ventedevise",
      icon: "fas fa-clipboard",
      icons: <FcCurrencyExchange/>,
      label: "Vente de devise",
    },
    {
      to: "/achatdevise",
      icon: "fas fa-clipboard",
      icons: <FcCurrencyExchange/>,
      label: "Achat de devise",
    },
    {
      to: "/compense",
      icon: "fas fa-redo-alt",
      icons: <HiOutlineDocumentReport/>,
      label: "Etat des compenses",
    },
    {
      to: "/caisse",
      icon: "fas fa-calendar",
      icons: <RiExchangeFundsLine/>,
      label: "Etat des caisses",
    },
    {
      to: "/operationencour",
      icon: "fas fa-calendar",
      icons: <AiOutlineLoading3Quarters/>,
      label: "Opération en cour...",
    },
  ];

export {Services}