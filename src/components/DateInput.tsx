
import React from "react";
import { Component } from "react";

import { format } from 'date-fns'

interface ComponentProps{
  date:Date,
  setDate:(newDateBegin: Date) => void
}

export class DateInput extends Component<ComponentProps>{

  render() {

    const  handleChangeDate = (dateInput: React.ChangeEvent<HTMLInputElement>) => {

      //This Replace is a crazy think of JavaScript that don't convert correctly dates with the caracter "-"

      const newDate = new Date(dateInput.target.value.replace("-", "/"));
      this.props.setDate(newDate);
    }
   
    const date = new Date();

    const today =  format(date, 'yyyy-MM-dd')

    date.setFullYear(date.getFullYear()-1);

    const lastYear = format(date, 'yyyy-MM-dd')


    return (
      <input type="date" min={lastYear} max={today} defaultValue={format(this.props.date, 'yyyy-MM-dd')} onChange={ e => handleChangeDate(e)} required></input>
    );
  }
}
