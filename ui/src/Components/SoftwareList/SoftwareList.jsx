import { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';

const SoftwareList = () => {
    const [softwareItems, setSoftwareItems] = useState();
    const [loadingItems, setLoadingItems] = useState(true);
    const getBasename = path => path.substr(0, path.lastIndexOf('/'));

    useEffect(() => {
        async function fetchData() {
            const reqParams = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Requested-With': 'XMLHttpRequest',
                    'Accept': 'application/json'
                }
            };

            await fetch(`${getBasename(window.location.pathname)}/api/size-data.json`, reqParams)
                .then((res) => {
                    if (res.ok) {
                        return res.json();
                    }
                    return Promise.reject(res);
                })
                .then(json => {
                    console.log('SoftwareList.jsx: lookup finished');
                    setLoadingItems(false);
                    if (json.library.length) {
                        setSoftwareItems(json.library);
                    } else {
                        console.info('SoftwareList.jsx error 1: no software items came back');
                    }
                })
                .catch((error) => {
                    console.error('SoftwareList.jsx catch error', error);
                    setLoadingItems(false);
                });
        };

        fetchData();

    }, []);

    const columns = [
        { field: 'name', headerName: 'Name', width: 280 },
        { field: 'launcher', headerName: 'Launcher', width: 135 },
        { field: 'download_in_gb', headerName: 'Download GB', width: 120 },
        { field: 'install_in_gb', headerName: 'Install GB', width: 120 },
        { field: 'platform', headerName: 'OS', width: 135 },
        { field: 'last_updated', headerName: 'Updated', width: 120 },
        { field: 'created_by', headerName: 'Added by', width: 135 },
    ];


    if (loadingItems) {
        return (<>Loading..</>);
    } else {
        return (
            <>
                <div style={{ height: 500, width: '100%' }}>

                    <DataGrid
                        rowsPerPageOptions={[25, 50, 100]}
                        rows={softwareItems}
                        columns={columns}
                        pageSize={25}
                    />

                </div>
            </>
        );
    }

};

export default SoftwareList;