module.exports = [
    {   header: 'Jimy Dean',
        mke: 'A^',
        oai: 'aje242135',
        name: 'Jim',
        sex: 'F',
        ethnicity: 'W',
        height: '711',
        weight: '274',
        hair: 'Blue', 
        offense: 'Theft', 
        warrentDate: '01/01/1900', 
        license: '', 
        dlState: '', 
        dlExpire: '', 
        plate: '', 
        plState: '', 
        plDate: '',
        period: '.',
}
]

// * Header: Required, 9-19 characters in length, any allowed
// * MKE: Required, 2-4 alpha/special characters in length
// * Originating Agency Identifier: Required, 9 alphanumeric characters in length
// * Name: Required, 3-30 characters in length, any allowed
// * Sex: Required, 1 character in length, alphabet only, F (female) M (male) and U (unknown) are the only accepted entries
// * Race: Required, 1 character in length, alphabet only
// * Height: Required, 3 characters in length, numeric only in FII format, where F is feet and I is inches
// * Weight: Required, 1-3 characters in length, numeric only in lbs, leading zeros to be entered systematically as necessary to change the length to 3 characters in the assembled query.
// * Hair: Required, 3-10 characters in length, alpha only
// * Offense: Required, 5-15 characters in length, any allowed
// * Date of Warrant/Violation: Required, 10 characters in length, numeric in MM/DD/YYYY format (allows dates from 1900 to today +1 day, to account for time zone differences)
// * Drivers License: Optional, 1-20 characters in length, any characters allowed, if included requires DL State & DL Expiration Year
// * DL State: Optional, 2 characters in length, state abbreviations only, if included requires Drivers License & DL Expiration Year
// * DL Expiration Date: Optional, 10 characters in length, numeric in MM/DD/YYYY format, if included requires Drivers License & DL State, can be future dated.
// * License Plate: Optional, 5-8 alphanumeric characters in length, if included requires License State & License Year
// * License State: Optional, 2 characters in length, state abbreviations only, if included requires License Plate and License Year
// * License Expiration Date: Optional, 10 characters in length, numeric in MM/DD/YYYY format, if included requires License Plate and License Year, can be future dated.
