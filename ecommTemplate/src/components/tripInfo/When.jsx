import { useContext, useEffect, useState } from "react";
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from 'date-fns'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

import { ShoppingContext } from "../../context";
import FormTemplate from "./FormTemplate";
import useDropdown from "../../hooks/useDropdown";

const When = () => {

    const {setSelectedDateRange, selectedDateRange,} = useContext(ShoppingContext)
    const [open, setOpen, handleClick, node] = useDropdown()

    const [dateRangeHolder, setDateRangeHolder] = useState(selectedDateRange)
    const [focusedRangeHolder, setFocusedRange] = useState([0,1])

    const handleRangeChange = (focusedRange) => {
        setFocusedRange(focusedRange)

    }

    function handleDateSelection(ranges){
        const { selection } = ranges;
        selection.first = true;
        setDateRangeHolder(selection)
    }

    useEffect(()=>{
        if (focusedRangeHolder[1] == 0){
            setSelectedDateRange(dateRangeHolder)
            setOpen(false)
        }
    },[dateRangeHolder])

    const dropdown = () => (
        <div 
            className={`sm:absolute ${open ? '' : 'hidden'} z-10 top-16 sm:border-none border border-primary rounded-md shadow-md`}
            style={{height: '80hv'}}
        >
            <DateRange
                ranges={[dateRangeHolder]}
                showMonthAndYearPickers={false}
                onChange={handleDateSelection}
                minDate={new Date()}
                direction='horizontal'
                startDatePlaceholder='Beginning'
                endDatePlaceholder='Finale'
                className={`rounded-md shadow-md flex`}
                onRangeFocusChange={handleRangeChange}
            />
        </div>
    )

    const dateText = selectedDateRange?.first ? format(selectedDateRange.startDate, 'MMM, d').concat(' - ', format(selectedDateRange.endDate, 'MMM d yyyy')) : ''

  return (
    <FormTemplate
        node={node}
        openFunc={setOpen}
        selectedData={dateText}
        dropdown={dropdown}
        placeholder={'When'}
        icon={CalendarMonthIcon}
    />
  )
}

export default When