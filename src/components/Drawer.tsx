import { useMemo, useId } from 'react'
import { Drawer as MuiDrawer, IconButton, Box, List, Typography, ListItem, ListItemIcon, ListItemButton, ListItemText } from "@mui/material"
import type { RootState } from "../redux/store"
import { useSelector, useDispatch } from 'react-redux'
import { toggle } from "../redux/slices/drawer"
import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import CloseIcon from '@mui/icons-material/Close';

interface Props {
    children: React.ReactElement | React.ReactElement[]
}

interface IListItem {
    text: React.ReactElement;
    icon: React.ReactElement;
}

const Drawer: React.FC<Props> = ({ children }) => {
    const open = useSelector((state: RootState) => state.drawer.open)
    const dispatch = useDispatch()

    const listItems: IListItem[] = useMemo(() => [
        {
            icon: <HomeIcon sx={{ color: '#FF5C00' }} />,
            text: <Typography color='white'>Tela inicial</Typography>
        },
        {
            icon: <NotificationsActiveIcon sx={{ color: '#FF5C00' }} />,
            text: <Typography color='white'>Alertas</Typography>
        },
        {
            icon: <SettingsIcon sx={{ color: '#FF5C00' }} />,
            text: <Typography color='white'>Configurações</Typography>
        },
        {
            icon: <ArticleIcon sx={{ color: '#FF5C00' }} />,
            text: <Typography color='white'>Logs</Typography>
        }
    ], [])

    const buildItems = (items: IListItem[]) => {
        return items.map((item) => <ListItem key={useId()} disablePadding>
            <ListItemButton>
                <ListItemIcon>
                    {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} />
            </ListItemButton>
        </ListItem>)
    }

    return <div>
        <MuiDrawer
            PaperProps={{
                sx: { backgroundColor: 'black' }
            }}
            anchor="left"
            open={open}
            onClose={() => dispatch(toggle())}
        >
            <Box
                sx={{ width: 250 }}
                role="presentation"
            >
                <Box display='flex' justifyContent='end' paddingX={2} paddingY={1}>
                    <IconButton onClick={() => dispatch(toggle())}>
                        <CloseIcon sx={{ color: '#FF5C00' }} />
                    </IconButton>
                </Box>
                <List>
                    {buildItems(listItems)}
                </List>
            </Box>
        </MuiDrawer>
        {children}
    </div>
}

export default Drawer
