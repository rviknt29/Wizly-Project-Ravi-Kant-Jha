import React from 'react';
import { Pagination, PaginationItem } from '@mui/material';

const CustomPagination = ({ count }) => {
    return (
        <div className="custom-pagination">
            <Pagination
                count={count}
                variant="text"
                renderItem={(item) => (
                    <PaginationItem
                        {...item}
                        className={`custom-pagination-item ${item.selected ? 'selected' : ''}`}
                    />
                )}
            />
        </div>
    );
};

export default CustomPagination;
