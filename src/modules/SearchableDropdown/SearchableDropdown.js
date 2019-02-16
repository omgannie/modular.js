import React from "react";
import PropTypes from "prop-types";

class SearchableDropdown extends React.Component {
    static words = [];

    static propTypes = {
        data: PropTypes.array.isRequired,
        type: PropTypes.string.isRequired,
        searchProperty: PropTypes.string.isRequired,
        searchTerm: PropTypes.string.isRequired
    };

    getFilteredResults() {
        const { data, type, searchProperty, searchTerm } = this.props;
        return data.filter(item =>
            type && type === SearchableDropdown.WORDS
                ? new RegExp(`\\b${searchTerm}`, "gi").test(item[searchProperty])
                : new RegExp(`${searchTerm}`, "gi").test(item[searchProperty])
        );
    };

    render() {
        return (
            <div>
                <input name={"searchField"} onChange={this.getFilteredResults} />
            </div>
        );
    }
}

export default SearchableDropdown;
