import React from 'react';
import Helmet from 'react-helmet';
import FormFields from 'react-form-fields';
import Datetime from 'react-datetime';
import SelectSearch from 'react-select-search'

export default (self) => {
  return (
    <div>
      <Helmet
        title="Just Meet | Add Meeting"
      />
      <div className="container-narrow">
        <form onSubmit={self.validate.bind(self)}>
          <FormFields
            tag="input" 
            validation="alphanumeric" 
            errorMsg="Meeting Subject is required" 
            ref="form-field-1"  
            required={true} 
            attributes={{
              type: 'text',
              placeholder: 'Subject',
              name: 'subject',
              id: 'subject'
            }}
          />
          <FormFields
            tag="textarea" 
            validation="alphanumeric" 
            errorMsg="Description is required" 
            ref="form-field-2"  
            required={true} 
            attributes={{
              placeholder: 'Description',
              name: 'description',
              id: 'description'
            }}
          />
          <Datetime ref="form-field-3" inputProps={{
            placeholder: 'Start date/time',
            name: 'starttime',
            id: 'starttime'
          }}/>
          <Datetime ref="form-field-4" inputProps={{
            placeholder: 'End date/time',
            name: 'endtime',
            id: 'endtime'
          }}/>
          <SelectSearch ref="form-field-5" options={self.state.attendees} name="attendees" placeholder="Invite Attendees" />
          <SelectSearch ref="form-field-6" options={self.state.meetingRooms} name="room" placeholder="Meeting Room" />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};