import { StatisticsThumb, StatList } from './StatisticsStyled';
import PropTypes from "prop-types";

export const Statistics = ({title, stats}) => {
    return (<StatisticsThumb>
        {title && (
            <h2>{title}</h2>
        )}

    <StatList>{
        stats.map(({ id, label, percentage }) =>
        <li key={id}>
            <span>{label}</span>
            <span>{percentage} %</span>
        </li>)}
    </StatList>
</StatisticsThumb>)
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    })),
}