//Ten years of dates to add to the end of the URL
var Wednesdays = [ "07%2F03%2F2007&Go=Go",  "07%2F11%2F2007&Go=Go",  "07%2F18%2F2007&Go=Go",  "07%2F25%2F2007&Go=Go",  "08%2F01%2F2007&Go=Go",  "08%2F08%2F2007&Go=Go",  "08%2F15%2F2007&Go=Go",  "08%2F22%2F2007&Go=Go",  "08%2F29%2F2007&Go=Go",  "09%2F05%2F2007&Go=Go",  "09%2F12%2F2007&Go=Go",  "09%2F19%2F2007&Go=Go",  "09%2F26%2F2007&Go=Go",  "10%2F03%2F2007&Go=Go",  "10%2F10%2F2007&Go=Go",  "10%2F17%2F2007&Go=Go",  "10%2F24%2F2007&Go=Go",  "10%2F31%2F2007&Go=Go",  "11%2F07%2F2007&Go=Go",  "11%2F14%2F2007&Go=Go",  "11%2F21%2F2007&Go=Go",  "11%2F28%2F2007&Go=Go",  "12%2F05%2F2007&Go=Go",  "12%2F12%2F2007&Go=Go",  "12%2F19%2F2007&Go=Go",  "12%2F26%2F2007&Go=Go",  "01%2F02%2F2008&Go=Go",  "01%2F09%2F2008&Go=Go",  "01%2F16%2F2008&Go=Go",  "01%2F23%2F2008&Go=Go",  "01%2F30%2F2008&Go=Go",  "02%2F06%2F2008&Go=Go",  "02%2F13%2F2008&Go=Go",  "02%2F20%2F2008&Go=Go",  "02%2F27%2F2008&Go=Go",  "03%2F05%2F2008&Go=Go",  "03%2F12%2F2008&Go=Go",  "03%2F19%2F2008&Go=Go",  "03%2F26%2F2008&Go=Go",  "04%2F02%2F2008&Go=Go",  "04%2F09%2F2008&Go=Go",  "04%2F16%2F2008&Go=Go",  "04%2F23%2F2008&Go=Go",  "04%2F30%2F2008&Go=Go",  "05%2F07%2F2008&Go=Go",  "05%2F14%2F2008&Go=Go",  "05%2F21%2F2008&Go=Go",  "05%2F28%2F2008&Go=Go",  "06%2F04%2F2008&Go=Go",  "06%2F11%2F2008&Go=Go",  "06%2F18%2F2008&Go=Go",  "06%2F25%2F2008&Go=Go",  "07%2F02%2F2008&Go=Go",  "07%2F09%2F2008&Go=Go",  "07%2F16%2F2008&Go=Go",  "07%2F23%2F2008&Go=Go",  "07%2F30%2F2008&Go=Go",  "08%2F06%2F2008&Go=Go",  "08%2F13%2F2008&Go=Go",  "08%2F20%2F2008&Go=Go",  "08%2F27%2F2008&Go=Go",  "09%2F03%2F2008&Go=Go",  "09%2F10%2F2008&Go=Go",  "09%2F17%2F2008&Go=Go",  "09%2F24%2F2008&Go=Go",  "10%2F01%2F2008&Go=Go",  "10%2F08%2F2008&Go=Go",  "10%2F15%2F2008&Go=Go",  "10%2F22%2F2008&Go=Go",  "10%2F29%2F2008&Go=Go",  "11%2F05%2F2008&Go=Go",  "11%2F12%2F2008&Go=Go",  "11%2F19%2F2008&Go=Go",  "11%2F26%2F2008&Go=Go",  "12%2F03%2F2008&Go=Go",  "12%2F10%2F2008&Go=Go",  "12%2F17%2F2008&Go=Go",  "12%2F24%2F2008&Go=Go",  "12%2F31%2F2008&Go=Go",  "01%2F07%2F2009&Go=Go",  "01%2F14%2F2009&Go=Go",  "01%2F21%2F2009&Go=Go",  "01%2F28%2F2009&Go=Go",  "02%2F04%2F2009&Go=Go",  "02%2F11%2F2009&Go=Go",  "02%2F18%2F2009&Go=Go",  "02%2F25%2F2009&Go=Go",  "03%2F04%2F2009&Go=Go",  "03%2F11%2F2009&Go=Go",  "03%2F18%2F2009&Go=Go",  "03%2F25%2F2009&Go=Go",  "04%2F01%2F2009&Go=Go",  "04%2F08%2F2009&Go=Go",  "04%2F15%2F2009&Go=Go",  "04%2F22%2F2009&Go=Go",  "04%2F29%2F2009&Go=Go",  "05%2F06%2F2009&Go=Go",  "05%2F13%2F2009&Go=Go",  "05%2F20%2F2009&Go=Go",  "05%2F27%2F2009&Go=Go",  "06%2F03%2F2009&Go=Go",  "06%2F10%2F2009&Go=Go",  "06%2F17%2F2009&Go=Go",  "06%2F24%2F2009&Go=Go",  "07%2F01%2F2009&Go=Go",  "07%2F8%2F2009&Go=Go",  "07%2F15%2F2009&Go=Go",  "07%2F22%2F2009&Go=Go",  "07%2F29%2F2009&Go=Go",  "08%2F05%2F2009&Go=Go",  "08%2F12%2F2009&Go=Go",  "08%2F19%2F2009&Go=Go",  "08%2F26%2F2009&Go=Go",  "09%2F02%2F2009&Go=Go",  "09%2F09%2F2009&Go=Go",  "09%2F16%2F2009&Go=Go",  "09%2F23%2F2009&Go=Go",  "09%2F30%2F2009&Go=Go",  "10%2F07%2F2009&Go=Go",  "10%2F14%2F2009&Go=Go",  "10%2F21%2F2009&Go=Go",  "10%2F28%2F2009&Go=Go",  "11%2F04%2F2009&Go=Go",  "11%2F10%2F2009&Go=Go",  "11%2F18%2F2009&Go=Go",  "11%2F25%2F2009&Go=Go",  "12%2F02%2F2009&Go=Go",  "12%2F09%2F2009&Go=Go",  "12%2F16%2F2009&Go=Go",  "12%2F23%2F2009&Go=Go",  "12%2F30%2F2009&Go=Go",  "01%2F06%2F2010&Go=Go",  "01%2F13%2F2010&Go=Go",  "01%2F20%2F2010&Go=Go",  "01%2F27%2F2010&Go=Go",  "02%2F03%2F2010&Go=Go",  "02%2F10%2F2010&Go=Go",  "02%2F17%2F2010&Go=Go",  "02%2F24%2F2010&Go=Go",  "03%2F03%2F2010&Go=Go",  "03%2F10%2F2010&Go=Go",  "03%2F17%2F2010&Go=Go",  "03%2F24%2F2010&Go=Go",  "03%2F31%2F2010&Go=Go",  "04%2F07%2F2010&Go=Go",  "04%2F14%2F2010&Go=Go",  "04%2F21%2F2010&Go=Go",  "04%2F28%2F2010&Go=Go",  "05%2F05%2F2010&Go=Go",  "05%2F12%2F2010&Go=Go",  "05%2F19%2F2010&Go=Go",  "05%2F26%2F2010&Go=Go",  "06%2F02%2F2010&Go=Go",  "06%2F09%2F2010&Go=Go",  "06%2F16%2F2010&Go=Go",  "06%2F23%2F2010&Go=Go",  "06%2F30%2F2010&Go=Go",  "07%2F07%2F2010&Go=Go",  "07%2F14%2F2010&Go=Go",  "07%2F21%2F2010&Go=Go",  "07%2F28%2F2010&Go=Go",  "08%2F04%2F2010&Go=Go",  "08%2F11%2F2010&Go=Go",  "08%2F18%2F2010&Go=Go",  "08%2F25%2F2010&Go=Go",  "09%2F01%2F2010&Go=Go",  "09%2F08%2F2010&Go=Go",  "09%2F15%2F2010&Go=Go",  "09%2F22%2F2010&Go=Go",  "09%2F29%2F2010&Go=Go",  "10%2F06%2F2010&Go=Go",  "10%2F13%2F2010&Go=Go",  "10%2F20%2F2010&Go=Go",  "10%2F27%2F2010&Go=Go",  "11%2F03%2F2010&Go=Go",  "11%2F10%2F2010&Go=Go",  "11%2F17%2F2010&Go=Go",  "11%2F24%2F2010&Go=Go",  "12%2F01%2F2010&Go=Go",  "12%2F08%2F2010&Go=Go",  "12%2F15%2F2010&Go=Go",  "12%2F22%2F2010&Go=Go",  "12%2F29%2F2010&Go=Go",  "01%2F05%2F2011&Go=Go",  "01%2F12%2F2011&Go=Go",  "01%2F19%2F2011&Go=Go",  "01%2F26%2F2011&Go=Go",  "02%2F02%2F2011&Go=Go",  "02%2F09%2F2011&Go=Go",  "02%2F16%2F2011&Go=Go",  "02%2F23%2F2011&Go=Go",  "03%2F02%2F2011&Go=Go",  "03%2F09%2F2011&Go=Go",  "03%2F16%2F2011&Go=Go",  "03%2F23%2F2011&Go=Go",  "03%2F30%2F2011&Go=Go",  "04%2F06%2F2011&Go=Go",  "04%2F13%2F2011&Go=Go",  "04%2F20%2F2011&Go=Go",  "04%2F27%2F2011&Go=Go",  "05%2F04%2F2011&Go=Go",  "05%2F11%2F2011&Go=Go",  "05%2F18%2F2011&Go=Go",  "05%2F25%2F2011&Go=Go",  "06%2F01%2F2011&Go=Go",  "06%2F08%2F2011&Go=Go",  "06%2F15%2F2011&Go=Go",  "06%2F22%2F2011&Go=Go",  "06%2F29%2F2011&Go=Go",  "07%2F06%2F2011&Go=Go",  "07%2F13%2F2011&Go=Go",  "07%2F20%2F2011&Go=Go",  "07%2F27%2F2011&Go=Go",  "08%2F03%2F2011&Go=Go",  "08%2F10%2F2011&Go=Go",  "08%2F17%2F2011&Go=Go",  "08%2F24%2F2011&Go=Go",  "08%2F31%2F2011&Go=Go",  "09%2F07%2F2011&Go=Go",  "09%2F14%2F2011&Go=Go",  "09%2F21%2F2011&Go=Go",  "09%2F28%2F2011&Go=Go",  "10%2F05%2F2011&Go=Go",  "10%2F12%2F2011&Go=Go",  "10%2F19%2F2011&Go=Go",  "10%2F26%2F2011&Go=Go",  "11%2F02%2F2011&Go=Go",  "11%2F09%2F2011&Go=Go",  "11%2F16%2F2011&Go=Go",  "11%2F23%2F2011&Go=Go",  "11%2F30%2F2011&Go=Go",  "12%2F07%2F2011&Go=Go",  "12%2F14%2F2011&Go=Go",  "12%2F21%2F2011&Go=Go",  "12%2F28%2F2011&Go=Go",  "01%2F04%2F2012&Go=Go",  "01%2F11%2F2012&Go=Go",  "01%2F18%2F2012&Go=Go",  "01%2F25%2F2012&Go=Go",  "02%2F01%2F2012&Go=Go",  "02%2F08%2F2012&Go=Go",  "02%2F15%2F2012&Go=Go",  "02%2F22%2F2012&Go=Go",  "02%2F29%2F2012&Go=Go",  "03%2F07%2F2012&Go=Go",  "03%2F14%2F2012&Go=Go",  "03%2F21%2F2012&Go=Go",  "03%2F28%2F2012&Go=Go",  "04%2F04%2F2012&Go=Go",  "04%2F11%2F2012&Go=Go",  "04%2F18%2F2012&Go=Go",  "04%2F25%2F2012&Go=Go",  "05%2F02%2F2012&Go=Go",  "05%2F09%2F2012&Go=Go",  "05%2F16%2F2012&Go=Go",  "05%2F23%2F2012&Go=Go",  "05%2F30%2F2012&Go=Go",  "06%2F06%2F2012&Go=Go",  "06%2F13%2F2012&Go=Go",  "06%2F20%2F2012&Go=Go",  "06%2F27%2F2012&Go=Go",  "07%2F03%2F2012&Go=Go",  "07%2F11%2F2012&Go=Go",  "07%2F18%2F2012&Go=Go",  "07%2F25%2F2012&Go=Go",  "08%2F01%2F2012&Go=Go",  "08%2F08%2F2012&Go=Go",  "08%2F15%2F2012&Go=Go",  "08%2F22%2F2012&Go=Go",  "08%2F29%2F2012&Go=Go",  "09%2F05%2F2012&Go=Go",  "09%2F12%2F2012&Go=Go",  "09%2F19%2F2012&Go=Go",  "09%2F26%2F2012&Go=Go",  "10%2F03%2F2012&Go=Go",  "10%2F10%2F2012&Go=Go",  "10%2F17%2F2012&Go=Go",  "10%2F24%2F2012&Go=Go",  "10%2F31%2F2012&Go=Go",  "11%2F07%2F2012&Go=Go",  "11%2F14%2F2012&Go=Go",  "11%2F21%2F2012&Go=Go",  "11%2F28%2F2012&Go=Go",  "12%2F05%2F2012&Go=Go",  "12%2F12%2F2012&Go=Go",  "12%2F19%2F2012&Go=Go",  "12%2F26%2F2012&Go=Go",  "01%2F02%2F2013&Go=Go",  "01%2F09%2F2013&Go=Go",  "01%2F16%2F2013&Go=Go",  "01%2F23%2F2013&Go=Go",  "01%2F30%2F2013&Go=Go",  "02%2F06%2F2013&Go=Go",  "02%2F13%2F2013&Go=Go",  "02%2F20%2F2013&Go=Go",  "02%2F27%2F2013&Go=Go",  "03%2F06%2F2013&Go=Go",  "03%2F13%2F2013&Go=Go",  "03%2F20%2F2013&Go=Go",  "03%2F27%2F2013&Go=Go",  "04%2F03%2F2013&Go=Go",  "04%2F10%2F2013&Go=Go",  "04%2F17%2F2013&Go=Go",  "04%2F24%2F2013&Go=Go",  "05%2F01%2F2013&Go=Go",  "05%2F08%2F2013&Go=Go",  "05%2F15%2F2013&Go=Go",  "05%2F22%2F2013&Go=Go",  "05%2F29%2F2013&Go=Go",  "06%2F05%2F2013&Go=Go",  "06%2F12%2F2013&Go=Go",  "06%2F19%2F2013&Go=Go",  "06%2F26%2F2013&Go=Go",  "07%2F03%2F2013&Go=Go",  "07%2F10%2F2013&Go=Go",  "07%2F17%2F2013&Go=Go",  "07%2F24%2F2013&Go=Go",  "07%2F31%2F2013&Go=Go",  "08%2F07%2F2013&Go=Go",  "08%2F14%2F2013&Go=Go",  "08%2F21%2F2013&Go=Go",  "08%2F28%2F2013&Go=Go",  "09%2F04%2F2013&Go=Go",  "09%2F11%2F2013&Go=Go",  "09%2F18%2F2013&Go=Go",  "09%2F25%2F2013&Go=Go",  "09%2F30%2F2013&Go=Go",  "09%2F30%2F2013&Go=Go",  "10%2F18%2F2013&Go=Go",  "10%2F23%2F2013&Go=Go",  "10%2F30%2F2013&Go=Go",  "11%2F06%2F2013&Go=Go",  "11%2F13%2F2013&Go=Go",  "11%2F20%2F2013&Go=Go",  "11%2F27%2F2013&Go=Go",  "12%2F04%2F2013&Go=Go",  "12%2F11%2F2013&Go=Go",  "12%2F18%2F2013&Go=Go",  "12%2F24%2F2013&Go=Go",  "12%2F31%2F2013&Go=Go",  "01%2F08%2F2014&Go=Go",  "01%2F15%2F2014&Go=Go",  "01%2F22%2F2014&Go=Go",  "01%2F29%2F2014&Go=Go",  "02%2F05%2F2014&Go=Go",  "02%2F12%2F2014&Go=Go",  "02%2F19%2F2014&Go=Go",  "02%2F26%2F2014&Go=Go",  "03%2F05%2F2014&Go=Go",  "03%2F12%2F2014&Go=Go",  "03%2F19%2F2014&Go=Go",  "03%2F26%2F2014&Go=Go",  "04%2F02%2F2014&Go=Go",  "04%2F09%2F2014&Go=Go",  "04%2F16%2F2014&Go=Go",  "04%2F23%2F2014&Go=Go",  "04%2F30%2F2014&Go=Go",  "05%2F07%2F2014&Go=Go",  "05%2F14%2F2014&Go=Go",  "05%2F21%2F2014&Go=Go",  "05%2F28%2F2014&Go=Go",  "06%2F04%2F2014&Go=Go",  "06%2F11%2F2014&Go=Go",  "06%2F18%2F2014&Go=Go",  "06%2F25%2F2014&Go=Go",  "07%2F02%2F2014&Go=Go",  "07%2F09%2F2014&Go=Go",  "07%2F16%2F2014&Go=Go",  "07%2F23%2F2014&Go=Go",  "07%2F30%2F2014&Go=Go",  "08%2F06%2F2014&Go=Go",  "08%2F13%2F2014&Go=Go",  "08%2F20%2F2014&Go=Go",  "08%2F27%2F2014&Go=Go",  "09%2F03%2F2014&Go=Go",  "09%2F10%2F2014&Go=Go",  "09%2F17%2F2014&Go=Go",  "09%2F24%2F2014&Go=Go",  "10%2F01%2F2014&Go=Go",  "10%2F08%2F2014&Go=Go",  "10%2F15%2F2014&Go=Go",  "10%2F22%2F2014&Go=Go",  "10%2F29%2F2014&Go=Go",  "11%2F05%2F2014&Go=Go",  "11%2F12%2F2014&Go=Go",  "11%2F19%2F2014&Go=Go",  "11%2F26%2F2014&Go=Go",  "12%2F03%2F2014&Go=Go",  "12%2F10%2F2014&Go=Go",  "12%2F17%2F2014&Go=Go",  "12%2F24%2F2014&Go=Go",  "12%2F31%2F2014&Go=Go",  "01%2F07%2F2015&Go=Go",  "01%2F14%2F2015&Go=Go",  "01%2F21%2F2015&Go=Go",  "01%2F28%2F2015&Go=Go",  "02%2F04%2F2015&Go=Go",  "02%2F11%2F2015&Go=Go",  "02%2F18%2F2015&Go=Go",  "02%2F25%2F2015&Go=Go",  "03%2F04%2F2015&Go=Go",  "03%2F11%2F2015&Go=Go",  "03%2F18%2F2015&Go=Go",  "03%2F25%2F2015&Go=Go",  "04%2F01%2F2015&Go=Go",  "04%2F08%2F2015&Go=Go",  "04%2F15%2F2015&Go=Go",  "04%2F22%2F2015&Go=Go",  "04%2F29%2F2015&Go=Go",  "05%2F06%2F2015&Go=Go",  "05%2F13%2F2015&Go=Go",  "05%2F20%2F2015&Go=Go",  "05%2F27%2F2015&Go=Go",  "06%2F03%2F2015&Go=Go",  "06%2F10%2F2015&Go=Go",  "06%2F17%2F2015&Go=Go",  "06%2F24%2F2015&Go=Go",  "07%2F01%2F2015&Go=Go",  "07%2F08%2F2015&Go=Go",  "07%2F15%2F2015&Go=Go",  "07%2F22%2F2015&Go=Go",  "07%2F29%2F2015&Go=Go",  "08%2F05%2F2015&Go=Go",  "08%2F12%2F2015&Go=Go",  "08%2F19%2F2015&Go=Go",  "08%2F26%2F2015&Go=Go",  "09%2F02%2F2015&Go=Go",  "09%2F09%2F2015&Go=Go",  "09%2F16%2F2015&Go=Go",  "09%2F23%2F2015&Go=Go",  "09%2F30%2F2015&Go=Go",  "10%2F07%2F2015&Go=Go",  "10%2F14%2F2015&Go=Go",  "10%2F21%2F2015&Go=Go",  "10%2F28%2F2015&Go=Go",  "11%2F04%2F2015&Go=Go",  "11%2F10%2F2015&Go=Go",  "11%2F18%2F2015&Go=Go",  "11%2F23%2F2015&Go=Go",  "12%2F02%2F2015&Go=Go",  "12%2F09%2F2015&Go=Go",  "12%2F16%2F2015&Go=Go",  "12%2F23%2F2015&Go=Go",  "12%2F30%2F2015&Go=Go",  "01%2F06%2F2016&Go=Go",  "01%2F13%2F2016&Go=Go",  "01%2F20%2F2016&Go=Go",  "01%2F27%2F2016&Go=Go",  "02%2F03%2F2016&Go=Go",  "02%2F10%2F2016&Go=Go",  "02%2F17%2F2016&Go=Go",  "02%2F24%2F2016&Go=Go",  "03%2F02%2F2016&Go=Go",  "03%2F09%2F2016&Go=Go",  "03%2F16%2F2016&Go=Go",  "03%2F23%2F2016&Go=Go",  "03%2F30%2F2016&Go=Go",  "04%2F06%2F2016&Go=Go",  "04%2F13%2F2016&Go=Go",  "04%2F20%2F2016&Go=Go",  "04%2F27%2F2016&Go=Go",  "05%2F04%2F2016&Go=Go",  "05%2F11%2F2016&Go=Go",  "05%2F17%2F2016&Go=Go",  "05%2F25%2F2016&Go=Go",  "06%2F01%2F2016&Go=Go",  "06%2F8%2F2016&Go=Go",  "06%2F15%2F2016&Go=Go",  "06%2F22%2F2016&Go=Go",  "06%2F29%2F2016&Go=Go",  "07%2F06%2F2016&Go=Go",  "07%2F13%2F2016&Go=Go",  "07%2F20%2F2016&Go=Go",  "07%2F27%2F2016&Go=Go",  "08%2F03%2F2016&Go=Go",  "08%2F10%2F2016&Go=Go",  "08%2F17%2F2016&Go=Go",  "08%2F24%2F2016&Go=Go",  "08%2F31%2F2016&Go=Go",  "09%2F07%2F2016&Go=Go",  "09%2F14%2F2016&Go=Go",  "09%2F21%2F2016&Go=Go",  "09%2F28%2F2016&Go=Go",  "10%2F05%2F2016&Go=Go",  "10%2F12%2F2016&Go=Go",  "10%2F19%2F2016&Go=Go",  "10%2F26%2F2016&Go=Go",  "11%2F02%2F2016&Go=Go",  "11%2F09%2F2016&Go=Go",  "11%2F16%2F2016&Go=Go",  "11%2F23%2F2016&Go=Go",  "11%2F30%2F2016&Go=Go",  "12%2F07%2F2016&Go=Go",  "12%2F14%2F2016&Go=Go",  "12%2F21%2F2016&Go=Go",  "12%2F28%2F2016&Go=Go",  "01%2F04%2F2017&Go=Go",  "01%2F11%2F2017&Go=Go",  "01%2F18%2F2017&Go=Go",  "01%2F25%2F2017&Go=Go",  "02%2F01%2F2017&Go=Go",  "02%2F08%2F2017&Go=Go",  "02%2F15%2F2017&Go=Go",  "02%2F22%2F2017&Go=Go",  "03%2F01%2F2017&Go=Go",  "03%2F08%2F2017&Go=Go",  "03%2F15%2F2017&Go=Go",  "03%2F22%2F2017&Go=Go",  "03%2F29%2F2017&Go=Go",  "04%2F05%2F2017&Go=Go",  "04%2F12%2F2017&Go=Go",  "04%2F19%2F2017&Go=Go",  "04%2F26%2F2017&Go=Go",  "05%2F03%2F2017&Go=Go",  "05%2F10%2F2017&Go=Go",  "05%2F17%2F2017&Go=Go",  "05%2F24%2F2017&Go=Go",  "05%2F31%2F2017&Go=Go",  "06%2F07%2F2017&Go=Go",  "06%2F14%2F2017&Go=Go",  "06%2F21%2F2017&Go=Go",  "06%2F28%2F2017&Go=Go"];
var https = require ('https')

for(i=0;i<Wednesdays.length;i++){
	//Make sure this URL is updated for each different product and location:
	var URL = "https://www.marketnews.usda.gov/mnp/fv-report-top-filters?type=movement&locAbr=&locName=&commName=CELERY&startIndex=1&rowDisplayMax=25&portal=fv&navType=byComm&navClass=VEGETABLES&termNavClass=&shipNavClass=&movNavClass=&stateID=&volume=&repType=movementDaily&commAbr=CEL&tranAbr=&environment=&organic=N&repDate="+Wednesdays[i];
	https.get(URL, res => {
		res.setEncoding("utf8");
		let body = '';
//To switch between movement volumes, broccoli prices, lettuce prices, and celery prices, swap in the relevant commented portion starting here:
	  	res.on("data", data => {
			body = body + data;
		});
		res.on("end", data => {
			var reUnits = /\d{2}\/\d{2}\/20\d{2}<\/span><\/td><td><span>[\w+\s+-]+<\/span><\/td><td><span>\d+/g;//find the volume moved for each date
			var Units = body.match(reUnits);//add that to the body
			if (Units===null){
				console.log("error");
			}
			else {
				for (j=0;j<Units.length;j++){
					console.log(Units[j])
				};
			};
		});
//and end the swap here
	});
};


// FOR MOVEMENT VOLUMES:
//		res.on("end", data => {
//			var reUnits = /\d{2}\/\d{2}\/20\d{2}<\/span><\/td><td><span>[\w+\s+]+<\/span><\/td><td><span>\d+/g;//find the volume moved for each date
//			var Units = body.match(reUnits);//add that to the body
//			if (Units===null){
//				console.log("error");
//			}
//			else {
//				for (j=0;j<Units.length;j++){
//					console.log(Units[j])
//				};
//			};
//		});

//FOR LETTUCE PRICES (the simplest of the vegetable price scripts -- lettuce has only one size and carton variety)
//res.on("end", data => {
//			var rePkg = /Package: (?:(?![&<]).)*/g;//Find the package type
//			var Pkg = body.match(rePkg);//add that to the body
//			for (j=0;j<Pkg.length;j++){
//				if (Pkg[j] === "Package: cartons"){
//					var rePrice =/\d{2}\/\d{2}\/20\d{2}<\/span><\/td><td><span>\d*\.\d*\s\-\s\d*\.\d*/g;//Find the price
//					var Price = body.match(rePrice);//add that to the body
//					if (Price===null){
//						console.log("error");
//					} else {
//						console.log(Price[j]);//and print it
//
//					};
//				};
//
//			};
//			
//		});


//FOR BROCCOLI PRICES
//		res.on("end", data => {
//			var rePkg = /Package: (?:(?![&<]).)*/g;//Find the package type
//			var Pkg = body.match(rePkg);//add that to the body
//				if (Pkg[0] === "Package: cartons"){ //Broccoli has multiple varieties under cartons but the first one is always the one I want
//					var rePrice =/\d{2}\/\d{2}\/20\d{2}<\/span><\/td><td><span>\d*\.\d*\s\-\s\d*\.\d*/g;//Find the price
//					var Price = body.match(rePrice);//add that to the body
//					if (Price===null){
//						console.log("error");
//					} else {
//						console.log(Price[0]);//and print it*/
//				};
//
//			};
//			
//		});

//FOR CELERY PRICES
//res.on("end", data => {
//			var rePkg = /Package: (?:(?![&<]).)*/g;//Find the package type
//			var Pkg = body.match(rePkg);//add that to the body
//			var reSize = /2 dz/g;//Celery cartons vary in size
//			var Size = body.match(reSize);
//			if (Pkg === null | Size === null){//Celery needs extra error check before starting loop; otherwise it's deluged with error messages
//				console.log("error");
//			} else {
//				for (j=0;j<Pkg.length;j++){
//				if (Pkg[j] === "Package: cartons" && Size[j] === "2 dz"){
//					var rePrice =/\d{2}\/\d{2}\/20\d{2}<\/span><\/td><td><span>\d*\.\d*\s\-\s\d*\.\d*/g;//Find the price
//					var Price = body.match(rePrice);//add that to the body
//					if (Price===null){
//						console.log("error");
//					} else {
//						console.log(Price[j]);//and print it
//					};
//				};
//			};
//
//			};
//			
//		});

