class CollapsibleFooter extends Collapsible {
  constructor() {
    super();

    this.listHeadings = this.querySelectorAll('.collapsable-list button');

    this.listHeadings.forEach((list) => {
      list.addEventListener('click', (e) => this.toggleList(e));
    });

    if (!this.options.breakpoint) {
      this.options.breakpoint = parseInt(768);
    }
    this.windowWidth = window.innerWidth;
    this.displayDetails();
  }

  construct() {
    super.construct();

    window.addEventListener('resize', () => {
      if (this.windowWidth == window.innerWidth) {
        return
      }
      this.windowWidth = window.innerWidth;
      this.displayDetails();
    });
  }
  
  toggleList(event) {
    const target = event.target.closest('.collapsable-list');
    const isOpen = target.getAttribute('data-open');
    if(isOpen === 'true') {
      this.close(target);
    } else {
      this.open(target);
    }
  }

  open(group) {
    if (window.innerWidth < this.options.breakpoint) {
      super.open(group);
    }
    group.setAttribute('data-open', 'true');
  }

  close(group) {
    if (window.innerWidth < this.options.breakpoint) {
      super.close(group);
    }
    group.setAttribute('data-open', 'false');
  }

  openAll(){

  }

  displayDetails() {
    if (window.innerWidth >= this.options.breakpoint) {
      this.openAll();
    } else {
      this.closeAll();
    }
  }

}

if (!customElements.get('collapsible-footer')) {
  customElements.define('collapsible-footer', CollapsibleFooter);
}
