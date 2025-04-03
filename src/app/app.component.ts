import { PanelMenu, PanelMenuModule } from 'primeng/panelmenu';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'app-root',
    imports: [ButtonModule, PanelMenuModule, PanelMenu],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
    items: MenuItem[] | undefined;

    ngOnInit() {
        this.items = [
            {
                label: 'Classes-Subclasses',
                icon: 'pi pi-file',
                items: [
                    {
                        label: 'Classes',
                        icon: 'pi pi-file',
                    },
                    {
                        label: 'Subclasses',
                        icon: 'pi pi-image',
                    }
                ]
            },
            {
                label: 'Races-Subraces',
                icon: 'pi pi-cloud',
                items: [
                    {
                        label: 'Races',
                        icon: 'pi pi-cloud-upload'
                    },
                    {
                        label: 'Subraces',
                        icon: 'pi pi-cloud-download'
                    }
                ]
            },
            {
                label: 'Monster',
                icon: 'pi pi-desktop'
            },
            {
                label: 'Spells',
                icon: 'pi pi-desktop'
            },
            {
                label: 'Equipment',
                icon: 'pi pi-desktop',
                items: [
                    {
                        label: 'Equipment Category',
                        icon: 'pi pi-desktop'
                    },
                    {
                        label: 'Classic Equipment',
                        icon: 'pi pi-mobile'
                    },
                    {
                        label: 'Magic Item',
                        icon: 'pi pi-tablet'
                    },
                    {
                        label: 'Weapon Property',
                        icon: 'pi pi-tablet'
                    }
                ]
            },
            {
                label: 'Character Data',
                icon: 'pi pi-desktop',
                items: [
                    {
                        label: 'Ability',
                        icon: 'pi pi-mobile'
                    },
                    {
                        label: 'Alignment',
                        icon: 'pi pi-desktop'
                    },
                    {
                        label: 'Background',
                        icon: 'pi pi-tablet'
                    },
                    {
                        label: 'Language',
                        icon: 'pi pi-tablet'
                    },
                    {
                        label: 'Proficiecy',
                        icon: 'pi pi-tablet'
                    },
                    {
                        label: 'Skills',
                        icon: 'pi pi-tablet'
                    }
                ]
            }
        ]
    }
}
