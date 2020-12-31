import React, { Component, Fragment } from 'react'
import {roomBooking} from '../../store/accommodations/bookingActions'
import { connect } from 'react-redux';
import './booking.scss'



export class booking extends Component {
    constructor() {
        super();
        this.state = {
            id:'',
            check_in_date: '',
            check_out_date: '',
            generalErrors:'',
            successMessage:''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      componentDidMount(){
        this.setState({...this.state, id:this.props.match.params.id})
      }
      componentDidUpdate(prevProps) {
        const { error, bookSuccessMessage } = this.props;
        if (error !== prevProps.error || bookSuccessMessage !== prevProps.bookSuccessMessage) {
          if (error) {
            this.setState({ ...this.state, generalErrors: error });
          }
          if (bookSuccessMessage) {
            this.setState({ ...this.state, successMessage: bookSuccessMessage });
          }
        }
      }
    handleChange(e){
        e.preventDefault();
        console.log('name', e.target.name)
        const {name,value}= e.target
        this.setState({[name]:value});
        console.log('state', this.state)
    }
   
    handleSubmit(e){
        e.preventDefault()
      const {check_in_date,check_out_date, id}=this.state
      const bookig = {check_in_date,check_out_date}
      this.props.roomBooking(bookig, id)
    }
    render() {
        const {check_in_date,check_out_date, generalErrors,successMessage}=this.state
        return (
            <Fragment>
                <form className="form-group book-form" onSubmit={this.handleSubmit}>
                <h1>{this.props.accommodation.name}</h1>
                {successMessage? <span className= 'text-success'>{successMessage}</span>:
              generalErrors? <span className= 'text-invalid'>{generalErrors}</span>:''  
              }
                <label>Check in date</label>
                <input type="date" name="check_in_date" className="form-control" onChange={this.handleChange} value={check_in_date}/>
                <label>Check out date</label>
                <input type="date" name="check_out_date" className="form-control" onChange={this.handleChange} value={check_out_date}/>
                <button type="submit" className={!this.props.pending ? 'btn btn-primary' : 'btn btn-primary btn-loading'} >{this.props.pending ? 'Submitting...' : 'Book'}</button>
                </form>
             </Fragment>
        )
    }
}
const mapStateToProps = (state) => ({
    pending: state.payload.pending,
    bookSuccessMessage: state.payload.bookSuccessMessage,
    error: state.payload.error,
    accommodation: state.payload.accommodation
  });

export default connect(mapStateToProps,{roomBooking}) (booking)
